import { Automata, IAutomataConfig, InputStyle } from "./automata";
import { Display, IDisplayConfig } from "./display";

interface IAppConfig {
  automata: IAutomataConfig & {
    setInputCells: (value: number) => void;
    setBase: (value: number) => void;
    setRuleId: (value: number) => void;
  };
  display: IDisplayConfig & {
    setSize: (value: number) => void;
    setZoom: (value: number) => void;
  };
  randomRule: boolean;
  setRandomRule: (value: boolean) => void;

  inputStyle: InputStyle;
  setInputStyle: (value: InputStyle) => void;

  enableScroll: boolean;
  setEnableScroll: (value: boolean) => void;
}

export class App {
  private config: IAppConfig;

  private scrollAnimationHandler: number;

  constructor() {
    const settingsForm = document.getElementById(
      "settings-form"
    ) as HTMLFormElement;

    if (settingsForm === null) {
      throw "Settings form not found";
    }

    const changeField = <TConfig>(
      obj: TConfig,
      field: keyof TConfig,
      value: any
    ) => {
      if (obj[field] === value) {
        return false;
      }

      obj[field] = value;
      return true;
    };

    const changeForm = (
      form: HTMLFormElement,
      element: string,
      value: any,
      select: (element: HTMLInputElement) => void = (element) => {
        element.value;
      },
      set: (element: HTMLInputElement, value: any) => void = (
        element,
        value
      ) => {
        element.value = value;
      }
    ) => {
      const elementValue = select(form.elements[element]);
      if (elementValue === value) {
        return false;
      }

      set(form.elements[element], value);
    };

    this.config = {
      automata: {
        inputCells: 0,
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

        base: 0,
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

        ruleId: 0,
        setRuleId: (value) => {
          changeField(this.config.automata, "ruleId", value);
          changeForm(settingsForm, "rule-id", value);
        },
      },

      display: {
        size: 0,
        setSize: (value) => {
          changeField(this.config.display, "size", value);
          changeForm(settingsForm, "size", value);
        },

        zoom: 0,
        setZoom: (value) => {
          changeField(this.config.display, "zoom", value);
          changeForm(settingsForm, "zoom", value);
        },

        colors: Display.getRandomColors(),
      },

      randomRule: false,
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

      inputStyle: InputStyle.centerDot,
      setInputStyle: (value) => {
        changeField(this.config, "inputStyle", value);
        changeForm(settingsForm, "input-style", value);
      },

      enableScroll: false,
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
    if (this.scrollAnimationHandler) {
      cancelAnimationFrame(this.scrollAnimationHandler);
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

      this.scrollAnimationHandler = requestAnimationFrame(scroll);
    };

    scroll();
  }

  handleToggleSettings() {
    const settingsSection = document.getElementById("settings");
    settingsSection.classList.toggle("d-n");
    settingsSection.classList.toggle("d-f");
  }
}
