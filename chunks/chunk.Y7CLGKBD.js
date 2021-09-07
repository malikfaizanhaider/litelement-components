import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  l
} from "./chunk.5MED2A3H.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  e as e2
} from "./chunk.YXKHB4AC.js";
import {
  T,
  e,
  h,
  n,
  o,
  r,
  r2
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\radio\radio.scss
var radio_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-block;\n}\n\n.radio {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--i2c-input-font-family);\n  font-size: var(--i2c-input-font-size-medium);\n  font-weight: var(--i2c-input-font-weight);\n  color: var(--i2c-input-color);\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.radio__icon {\n  display: inline-flex;\n  width: var(--i2c-toggle-size);\n  height: var(--i2c-toggle-size);\n}\n.radio__icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.radio__control {\n  flex: 0 0 auto;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--i2c-toggle-size);\n  height: var(--i2c-toggle-size);\n  border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);\n  border-radius: 50%;\n  background-color: var(--i2c-input-background-color);\n  color: transparent;\n  transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color, var(--i2c-transition-fast) color, var(--i2c-transition-fast) box-shadow;\n}\n.radio__control input[type=radio] {\n  position: absolute;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n}\n\n.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {\n  border-color: var(--i2c-input-border-color-hover);\n  background-color: var(--i2c-input-background-color-hover);\n}\n\n.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control {\n  border-color: var(--i2c-input-border-color-focus);\n  background-color: var(--i2c-input-background-color-focus);\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.radio--checked .radio__control {\n  color: var(--i2c-color-white);\n  border-color: var(--i2c-color-primary-500);\n  background-color: var(--i2c-color-primary-500);\n}\n\n.radio.radio--checked:not(.radio--disabled) .radio__control:hover {\n  border-color: var(--i2c-color-primary-400);\n  background-color: var(--i2c-color-primary-400);\n}\n\n.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control {\n  border-color: var(--i2c-color-primary-400);\n  background-color: var(--i2c-color-primary-400);\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.radio--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.radio:not(.radio--checked) svg circle {\n  opacity: 0;\n}\n\n.radio__label {\n  line-height: var(--i2c-toggle-size);\n  margin-left: 0.5em;\n  user-select: none;\n}";

// src/components/radio/radio.ts
var id = 0;
var I2CRadio = class extends h {
  constructor() {
    super(...arguments);
    this.inputId = `radio-${++id}`;
    this.labelId = `radio-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  getAllRadios() {
    const radioGroup = this.closest("i2c-radio-group");
    if (!radioGroup) {
      return [];
    }
    return [...radioGroup.querySelectorAll("i2c-radio")].filter((radio) => radio.name === this.name);
  }
  getSiblingRadios() {
    return this.getAllRadios().filter((radio) => radio !== this);
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "i2c-blur");
  }
  handleCheckedChange() {
    if (this.checked) {
      this.getSiblingRadios().map((radio) => radio.checked = false);
    }
    emit(this, "i2c-change");
  }
  handleClick() {
    this.checked = true;
  }
  handleDisabledChange() {
    if (this.input) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "i2c-focus");
  }
  handleKeyDown(event) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this) + incr;
      if (index < 0)
        index = radios.length - 1;
      if (index > radios.length - 1)
        index = 0;
      this.getAllRadios().map((radio) => radio.checked = false);
      radios[index].focus();
      radios[index].checked = true;
      event.preventDefault();
    }
  }
  handleMouseDown(event) {
    event.preventDefault();
    this.input.focus();
  }
  render() {
    return T`
      <label
        part="base"
        class=${e2({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus
    })}
        for=${this.inputId}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>

          <input
            id=${this.inputId}
            type="radio"
            name=${l(this.name)}
            value=${l(this.value)}
            .checked=${this.checked}
            .disabled=${this.disabled}
            aria-checked=${this.checked ? "true" : "false"}
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
        </span>

        <span part="label" id=${this.labelId} class="radio__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
I2CRadio.styles = r(radio_default);
__decorateClass([
  o('input[type="radio"]')
], I2CRadio.prototype, "input", 2);
__decorateClass([
  r2()
], I2CRadio.prototype, "hasFocus", 2);
__decorateClass([
  e()
], I2CRadio.prototype, "name", 2);
__decorateClass([
  e()
], I2CRadio.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CRadio.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CRadio.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CRadio.prototype, "invalid", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], I2CRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], I2CRadio.prototype, "handleDisabledChange", 1);
I2CRadio = __decorateClass([
  n("i2c-radio")
], I2CRadio);
var radio_default2 = I2CRadio;

export {
  radio_default2 as radio_default
};
