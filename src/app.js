/* global Automata, Display, InputStyle */

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
    });

    this.generate();
  }

  generate() {
    if (this.config.randomRule) {
      this.config.automata.setRuleId(
        Automata.getRandomRule(this.config.automata)
      );
    }
    this.config.display.colors = Display.getRandomColors();
    const automata = new Automata(this.config.automata);
    const display = new Display(this.config.display);
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

  handleToggleSettings() {
    const settingsSection = document.getElementById("settings");
    settingsSection.classList.toggle("d-n-i");
  }
}

/* exported app */
var app = new App();
