import { AppConfig } from "./appConfig";
import { Automata, InputStyle } from "./automata";
import { Display } from "./display";

export class App {
  private config: AppConfig;

  private scrollAnimationHandler: number;

  constructor() {
    const settingsForm = document.getElementById(
      "settings-form"
    ) as HTMLFormElement;

    if (settingsForm === null) {
      throw "Settings form not found";
    }

    this.config = new AppConfig(
      {
        automata: {
          base: 3,
          inputCells: 3,
          ruleId: 0,
        },
        display: {
          size: 360,
          zoom: 2,
          colors: Display.getRandomColors(),
        },
        randomRule: true,
        inputStyle: InputStyle.shuffleEven,
        enableScroll: false,
      },
      settingsForm
    );

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

  private instantGenerate(automata: Automata, display: Display) {
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

  private scrollGenerate(automata: Automata, display: Display) {
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
