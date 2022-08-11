/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils.js
function shuffle(array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

;// CONCATENATED MODULE: ./src/automata.js


const InputStyle = {
  centerDot: "center-dot",
  even: "even",
  shuffleEven: "shuffle-even",
  random: "random",
};

class Automata {
  constructor(conf) {
    if (conf.base < 2 || 8 < conf.base) {
      throw "Invalid Input";
    }
    const rulesCount = Math.pow(conf.base, conf.inputCells);
    if (Math.pow(conf.base, rulesCount) < conf.ruleId) {
      throw "Invalid Input";
    }
    const rulesArray = new Array(rulesCount);
    let convert = conf.ruleId;
    for (let i = 0; i < rulesCount; i++) {
      rulesArray[i] = convert % conf.base;
      convert = parseInt(convert / conf.base);
    }

    this.base = conf.base;
    this.inputCells = conf.inputCells;
    this.rules = rulesArray;
  }

  invoke(input) {
    const size = input.length;
    const output = new Array(size);
    for (let i = 0; i < size; i++) {
      let ruleId = 0;
      for (let j = 0; j < this.inputCells; j++) {
        let inputIndex = i + j - parseInt(this.inputCells / 2);
        if (inputIndex < 0) {
          inputIndex = size + inputIndex;
        }
        if (size <= inputIndex) {
          inputIndex = inputIndex - size;
        }
        ruleId = ruleId * this.base + input[inputIndex];
      }
      output[i] = this.rules[ruleId];
    }
    return output;
  }

  getInputRow(inputType, size) {
    size = parseInt(size);

    const centerDot = () => {
      const result = new Array(size).fill(0);
      result[parseInt(size / 2)] = 1;
      return result;
    };

    const even = () => {
      let result = [];
      let baseLeft = this.base;
      let sizeLeft = size;
      while (0 < baseLeft) {
        const tmpSize = parseInt(sizeLeft / baseLeft);
        baseLeft--;
        result = result.concat(new Array(tmpSize).fill(baseLeft));
        sizeLeft -= tmpSize;
      }
      return result;
    };

    const shuffleEven = () => {
      return shuffle(even());
    };

    const random = () => {
      const result = new Array(size).fill(0);
      for (let i = 0; i < size; i++) {
        result[i] = Math.floor(Math.random() * this.base);
      }
      return result;
    };

    switch (inputType) {
      case InputStyle.centerDot:
        return centerDot();
      case InputStyle.even:
        return even();
      case InputStyle.shuffleEven:
        return shuffleEven();
      default:
        return random();
    }
  }

  static getRandomRule(conf) {
    return Math.floor(Math.random() * Automata.getRulesCount(conf));
  }

  static getRulesCount(conf) {
    return Math.pow(conf.base, Math.pow(conf.base, conf.inputCells));
  }
}

;// CONCATENATED MODULE: ./src/display.js


class Display {
  constructor(conf) {
    this.size = conf.size;
    this.zoom = conf.zoom;
    this.colors = conf.colors;

    this.canvas = document.getElementById("canvas");
    this.canvas.height = this.size * this.zoom;
    this.canvas.width = this.size * this.zoom;
    this.context = this.canvas.getContext("2d");
  }

  drawRow(rowIndex, row) {
    const y = rowIndex * this.zoom;
    for (let i = 0; i < row.length; i++) {
      const x = i * this.zoom;
      this.context.fillStyle = this.colors[row[i]];
      this.context.fillRect(x, y, this.zoom, this.zoom);
    }
  }

  shiftUp(rowsCount) {
    const imageData = this.context.getImageData(
      0,
      rowsCount * this.zoom,
      this.canvas.height,
      this.canvas.width
    );
    this.context.putImageData(imageData, 0, 0);
  }

  static getRandomColors() {
    const colors = [
      "#FAFAFA", // black
      "#212121", // white
      "#F44336", // red
      "#4CAF50", // green
      "#2196F3", // blue
      "#FFEB3B", // yellow
      "#9C27B0", // purple
      "#00BCD4", // cyan
    ];
    return shuffle(colors);
  }
}

;// CONCATENATED MODULE: ./src/app.js



class App {
  constructor() {
    const settingsForm = document.getElementById("settings-form");

    const changeField = (obj, field, value) => {
      if (obj[field] === value) {
        return false;
      }

      obj[field] = value;
      return true;
    };

    const changeForm = (form, element, value, select, set) => {
      if (!select) {
        select = (element) => {
          element.value;
        };
      }

      if (!set) {
        set = (element, value) => {
          element.value = value;
        };
      }

      const elementValue = select(form.elements[element]);
      if (elementValue === value) {
        return false;
      }

      set(form.elements[element], value);
    };

    this.config = {
      automata: {
        setInputCells: (value) => {
          if (changeField(this.config.automata, "inputCells", value)) {
            changeForm(
              settingsForm,
              "rule-id",
              Automata.getRulesCount(this.config.automata),
              (element) => element.getAttribute("max"),
              (element, value) => element.setAttribute("max", value)
            );
          }

          changeForm(settingsForm, "input-cells", value);
        },

        setBase: (value) => {
          if (changeField(this.config.automata, "base", value)) {
            changeForm(
              settingsForm,
              "rule-id",
              Automata.getRulesCount(this.config.automata),
              (element) => element.getAttribute("max"),
              (element, value) => element.setAttribute("max", value)
            );
            this.config.setRandomRule(true);
          }

          changeForm(settingsForm, "base", value);
        },

        setRuleId: (value) => {
          changeField(this.config.automata, "ruleId", value);
          changeForm(settingsForm, "rule-id", value);
        },
      },

      display: {
        setSize: (value) => {
          changeField(this.config.display, "size", value);
          changeForm(settingsForm, "size", value);
        },
        setZoom: (value) => {
          changeField(this.config.display, "zoom", value);
          changeForm(settingsForm, "zoom", value);
        },
        colors: Display.getRandomColors(),
      },

      setRandomRule: (value) => {
        changeField(this.config, "randomRule", value);
        changeForm(
          settingsForm,
          "random-rule",
          value,
          (element) => element.checked,
          (element, value) => (element.checked = value)
        );
        changeForm(
          settingsForm,
          "rule-id",
          value,
          (element) => element.disabled,
          (element, value) => (element.disabled = value)
        );
      },

      setInputStyle: (value) => {
        changeField(this.config, "inputStyle", value);
        changeForm(settingsForm, "input-style", value);
      },

      setEnableScroll: (value) => {
        changeField(this.config, "enableScroll", value);
        changeForm(
          settingsForm,
          "enable-scroll",
          value,
          (element) => element.checked,
          (element, value) => (element.checked = value)
        );
      },
    };

    // Init select
    const inputStyleSelect = settingsForm.elements["input-style"];
    Object.entries(InputStyle).forEach(([_, value]) => {
      const option = document.createElement("option");
      option.value = value;
      option.innerHTML = value;
      inputStyleSelect.appendChild(option);
    });

    // Default config
    this.config.automata.setBase(3);
    this.config.automata.setInputCells(3);
    this.config.display.setSize(360);
    this.config.display.setZoom(2);
    this.config.setRandomRule(true);
    this.config.setInputStyle(InputStyle.shuffleEven);
    this.config.setEnableScroll(false);

    settingsForm.addEventListener("change", () => {
      this.config.automata.setBase(settingsForm.elements["base"].value);
      this.config.automata.setInputCells(
        settingsForm.elements["input-cells"].value
      );
      this.config.automata.setRuleId(settingsForm.elements["rule-id"].value);

      this.config.display.setSize(settingsForm.elements["size"].value);
      this.config.display.setZoom(settingsForm.elements["zoom"].value);

      this.config.setRandomRule(settingsForm.elements["random-rule"].checked);
      this.config.setInputStyle(settingsForm.elements["input-style"].value);
      this.config.setEnableScroll(
        settingsForm.elements["enable-scroll"].checked
      );
    });

    this.generate();
  }

  generate() {
    if (this.scrollAnimation) {
      cancelAnimationFrame(this.scrollAnimation);
    }

    if (this.config.randomRule) {
      this.config.automata.setRuleId(
        Automata.getRandomRule(this.config.automata)
      );
    }

    this.config.display.colors = Display.getRandomColors();
    const automata = new Automata(this.config.automata);
    const display = new Display(this.config.display);
    if (this.config.enableScroll) {
      this.scrollGenerate(automata, display);
    } else {
      this.instantGenerate(automata, display);
    }
  }

  instantGenerate(automata, display) {
    let row = automata.getInputRow(
      this.config.inputStyle,
      this.config.display.size
    );
    display.drawRow(0, row);
    for (let i = 1; i < this.config.display.size; i++) {
      row = automata.invoke(row);
      display.drawRow(i, row);
    }
  }

  scrollGenerate(automata, display) {
    let row = automata.getInputRow(
      this.config.inputStyle,
      this.config.display.size
    );
    display.drawRow(0, row);

    let rowIndex = 0;
    const scroll = () => {
      if (rowIndex < this.config.display.size - 1) {
        rowIndex++;
      } else {
        display.shiftUp(1);
      }
      row = automata.invoke(row);
      display.drawRow(rowIndex, row);

      this.scrollAnimation = requestAnimationFrame(scroll);
    };

    scroll();
  }

  handleToggleSettings() {
    const settingsSection = document.getElementById("settings");
    settingsSection.classList.toggle("d-n-i");
  }
}

;// CONCATENATED MODULE: ./src/index.js

// eslint-disable-next-line no-unused-vars -- import global styles


const app = new App();
window.app = app;

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map