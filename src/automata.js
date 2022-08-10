import { shuffle } from "./utils.js";

export const InputStyle = {
  centerDot: "center-dot",
  even: "even",
  shuffleEven: "shuffle-even",
  random: "random",
};

export class Automata {
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
