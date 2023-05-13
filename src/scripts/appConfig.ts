import { Automata, IAutomataConfig, InputStyle } from "./automata";
import { IDisplayConfig } from "./display";

interface IAppConfig {
  automata: IAutomataConfig;
  display: IDisplayConfig;
  randomRule: boolean;
  inputStyle: InputStyle;
  enableScroll: boolean;
}

function changeField<TConfig, TKey extends keyof TConfig>(
  obj: TConfig,
  field: TKey,
  value: TConfig[TKey]
) {
  if (obj[field] === value) {
    return false;
  }

  obj[field] = value;
  return true;
}

function changeInput(element: HTMLInputElement, value: string) {
  if (element.value === value) {
    return false;
  }

  element.value = value;
  return true;
}

function changeCheckbox(element: HTMLInputElement, value: boolean) {
  if (element.checked === value) {
    return false;
  }

  element.checked = value;
  return true;
}

function changeForm<TValue extends string | number | boolean>(
  form: HTMLFormElement,
  element: string,
  value: TValue,
  select: (element: HTMLInputElement) => TValue,
  set: (element: HTMLInputElement, value: TValue) => void
) {
  const elementValue = select(form.elements[element]);
  if (elementValue === value) {
    return false;
  }

  set(form.elements[element], value);
  return true;
}

function getFormFieldName(config: string, field: string) {
  return `${config}.${field}`;
}

abstract class BaseConfig<TConfig> {
  protected self: TConfig;

  constructor(
    protected settingsForm: HTMLFormElement,
    private configName: string
  ) {}

  public getFormValueInt(field: keyof TConfig) {
    return parseInt(this.getFormElement(field).value);
  }

  public getFormValue<T>(field: keyof TConfig) {
    return this.getFormElement(field).value as unknown as T;
  }

  public getFormChecked(field: keyof TConfig) {
    return (this.getFormElement(field) as HTMLInputElement).checked;
  }

  protected changeField<TKey extends keyof TConfig>(
    field: TKey,
    value: TConfig[TKey]
  ) {
    return changeField(this.self, field, value);
  }

  protected changeInput(field: keyof TConfig, value: string | number) {
    return changeInput(
      this.getFormElement(field) as HTMLInputElement,
      value.toString()
    );
  }

  protected changeCheckbox(field: keyof TConfig, value: boolean) {
    return changeCheckbox(
      this.getFormElement(field) as HTMLInputElement,
      value
    );
  }

  protected formField = (field: keyof TConfig) => {
    return getFormFieldName(this.configName, field as string);
  };

  protected getFormElement(field: keyof TConfig) {
    return this.settingsForm.elements[this.formField(field)] as
      | HTMLInputElement
      | HTMLSelectElement;
  }
}

class AutomataConfig
  extends BaseConfig<IAutomataConfig>
  implements IAutomataConfig
{
  base: number;
  inputCells: number;
  ruleId: number;

  constructor(
    config: IAutomataConfig,
    settingsForm: HTMLFormElement,
    private appConfig: AppConfig
  ) {
    super(settingsForm, "automata");
    this.self = this;
    this.setBase(config.base);
    this.setInputCells(config.inputCells);
    this.setRuleId(config.ruleId);
  }

  setInputCells(value: number) {
    if (this.changeField("inputCells", value)) {
      changeForm(
        this.settingsForm,
        this.formField("ruleId"),
        Automata.getRulesCount_Legacy(this).toString(),
        (element) => element.getAttribute("max"),
        (element, value) => element.setAttribute("max", value)
      );
    }

    this.changeInput("inputCells", value);
  }

  setBase(value: number) {
    if (this.changeField("base", value)) {
      changeForm(
        this.settingsForm,
        this.formField("ruleId"),
        Automata.getRulesCount_Legacy(this).toString(),
        (element) => element.getAttribute("max"),
        (element, value) => element.setAttribute("max", value)
      );
      this.appConfig.setRandomRule(true);
    }
    this.changeInput("base", value);
  }

  setRuleId(value: number) {
    this.changeField("ruleId", value);
    this.changeInput("ruleId", value);
  }
}

class DisplayConfig
  extends BaseConfig<IDisplayConfig>
  implements IDisplayConfig
{
  size: number;
  zoom: number;
  colors: string[];

  constructor(config: IDisplayConfig, settingsForm: HTMLFormElement) {
    super(settingsForm, "display");
    this.self = this;

    this.setSize(config.size);
    this.setZoom(config.zoom);
    this.colors = config.colors;
  }

  setSize(value: number) {
    this.changeField("size", value);
    this.changeInput("size", value);
  }

  setZoom(value: number) {
    this.changeField("zoom", value);
    this.changeInput("zoom", value);
  }
}

export class AppConfig extends BaseConfig<IAppConfig> implements IAppConfig {
  automata: AutomataConfig;
  display: DisplayConfig;
  randomRule: boolean;
  inputStyle: InputStyle;
  enableScroll: boolean;

  constructor(config: IAppConfig, settingsForm: HTMLFormElement) {
    super(settingsForm, "app");
    this.self = this;
    this.automata = new AutomataConfig(config.automata, settingsForm, this);
    this.display = new DisplayConfig(config.display, settingsForm);

    // Init select
    const inputStyleSelect = this.getFormElement(
      "inputStyle"
    ) as HTMLSelectElement;
    Object.entries(InputStyle).forEach(([_, value]) => {
      const option = document.createElement("option");
      option.value = value;
      option.innerHTML = value;
      inputStyleSelect.appendChild(option);
    });

    this.setRandomRule(config.randomRule);
    this.setInputStyle(config.inputStyle);
    this.setEnableScroll(config.enableScroll);

    // Add event listeners
    settingsForm.addEventListener("change", () => {
      this.automata.setBase(this.automata.getFormValueInt("base"));
      this.automata.setInputCells(this.automata.getFormValueInt("inputCells"));
      this.automata.setRuleId(this.automata.getFormValueInt("ruleId"));

      this.display.setSize(this.display.getFormValueInt("size"));
      this.display.setZoom(this.display.getFormValueInt("zoom"));

      this.setRandomRule(this.getFormChecked("randomRule"));
      this.setInputStyle(this.getFormValue("inputStyle"));
      this.setEnableScroll(this.getFormChecked("enableScroll"));
    });
  }

  setRandomRule(value: boolean) {
    this.changeField("randomRule", value);
    this.changeCheckbox("randomRule", value);
    changeForm(
      this.settingsForm,
      getFormFieldName("automata", "ruleId"),
      value,
      (element) => element.disabled,
      (element, value) => (element.disabled = value)
    );
  }

  setInputStyle(value: InputStyle) {
    this.changeField("inputStyle", value);
    this.changeInput("inputStyle", value);
  }

  setEnableScroll(value: boolean) {
    this.changeField("enableScroll", value);
    this.changeCheckbox("enableScroll", value);
  }
}
