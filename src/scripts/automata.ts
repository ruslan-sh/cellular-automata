import { shuffle } from "./utils";

const minBase = 2;
const maxBase = 8;
const minInputCells = 2;
const maxInputCells = 5;

export enum InputStyle {
  centerDot = "center-dot",
  even = "even",
  shuffleEven = "shuffle-even",
  random = "random",
}

export interface IAutomataConfig {
  base: number;
  inputCells: number;
  ruleId: number;
}

export class Automata {
  private base: number;
  private inputCellsCount: number;
  private rules: number[];

  constructor(conf: IAutomataConfig) {
    this.base = conf.base;
    this.inputCellsCount = conf.inputCells;
    this.rules = Automata.getRandomRule(conf);
  }

  invoke(inputRow: number[]) {
    const rowSize = inputRow.length;
    const output = new Array(rowSize);
    for (let i = 0; i < rowSize; i++) {
      let ruleId = 0;
      for (let j = 0; j < this.inputCellsCount; j++) {
        let inputIndex = i + j - Math.trunc(this.inputCellsCount / 2);
        if (inputIndex < 0) {
          inputIndex = rowSize + inputIndex;
        }
        if (rowSize <= inputIndex) {
          inputIndex = inputIndex - rowSize;
        }
        ruleId = ruleId * this.base + inputRow[inputIndex];
      }
      output[i] = this.rules[ruleId];
    }
    return output;
  }

  getInputRow(inputStyle: InputStyle, rowSize: number) {
    rowSize = Math.trunc(rowSize);

    const centerDot = () => {
      const result = new Array(rowSize).fill(0);
      result[Math.trunc(rowSize / 2)] = 1;
      return result;
    };

    const even = () => {
      let result = [];
      let baseLeft = this.base;
      let sizeLeft = rowSize;
      while (0 < baseLeft) {
        const tmpSize = Math.trunc(sizeLeft / baseLeft);
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
      const result = new Array(rowSize).fill(0);
      for (let i = 0; i < rowSize; i++) {
        result[i] = Math.floor(Math.random() * this.base);
      }
      return result;
    };

    switch (inputStyle) {
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

  static getRandomRule(conf: IAutomataConfig) {
    const rulesCount = this.getRulesCount(conf);
    const result = new Array(rulesCount);
    for (let i = 0; i < rulesCount; i++) {
      result[i] = Math.floor(Math.random() * conf.base);
    }
    return result;
  }

  static getRulesCount(conf: IAutomataConfig) {
    if (conf.base < minBase || maxBase < conf.base) {
      throw `Invalid Input. Base must be between ${minBase} and ${maxBase}.`;
    }
    if (conf.inputCells < minInputCells || maxInputCells < conf.inputCells) {
      throw `Invalid Input. InputCells must be between ${minInputCells} and ${maxInputCells}.`;
    }
    return Math.pow(conf.base, conf.inputCells);
  }

  static getRandomRule_Legacy(conf: IAutomataConfig) {
    return Math.floor(Math.random() * Automata.getRulesCount_Legacy(conf));
  }

  static getRulesCount_Legacy(conf: IAutomataConfig) {
    return Math.pow(conf.base, Math.pow(conf.base, conf.inputCells));
  }
}
