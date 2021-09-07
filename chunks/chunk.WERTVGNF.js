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

// _vgtx8nf3g:D:\DSM-V2\src\components\switch\switch.scss
var switch_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --height: var(--i2c-toggle-size);\n  --thumb-size: calc(var(--i2c-toggle-size) + 4px);\n  --width: calc(var(--height) * 2);\n  display: inline-block;\n}\n\n.switch {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--i2c-input-font-family);\n  font-size: var(--i2c-input-font-size-medium);\n  font-weight: var(--i2c-input-font-weight);\n  color: var(--i2c-input-color);\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.switch__control {\n  flex: 0 0 auto;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--width);\n  height: var(--height);\n  background-color: var(--i2c-color-gray-300);\n  border: solid var(--i2c-input-border-width) var(--i2c-color-gray-300);\n  border-radius: var(--height);\n  transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color;\n}\n.switch__control .switch__thumb {\n  width: var(--thumb-size);\n  height: var(--thumb-size);\n  background-color: var(--i2c-color-white);\n  border-radius: 50%;\n  border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);\n  transform: translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));\n  transition: var(--i2c-transition-fast) transform ease, var(--i2c-transition-fast) background-color, var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) box-shadow;\n}\n.switch__control input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n}\n\n.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {\n  background-color: var(--i2c-color-gray-200);\n  border-color: var(--i2c-color-gray-200);\n}\n.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {\n  background-color: var(--i2c-color-white);\n  border-color: var(--i2c-input-border-color);\n}\n\n.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control {\n  background-color: var(--i2c-color-gray-200);\n  border-color: var(--i2c-color-gray-200);\n}\n.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control .switch__thumb {\n  background-color: var(--i2c-color-white);\n  border-color: var(--i2c-color-primary-500);\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.switch--checked .switch__control {\n  background-color: var(--i2c-color-primary-500);\n  border-color: var(--i2c-color-primary-500);\n}\n.switch--checked .switch__control .switch__thumb {\n  background-color: var(--i2c-color-white);\n  border-color: var(--i2c-color-primary-500);\n  transform: translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2));\n}\n\n.switch.switch--checked:not(.switch--disabled) .switch__control:hover {\n  background-color: var(--i2c-color-primary-400);\n  border-color: var(--i2c-color-primary-400);\n}\n.switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {\n  background-color: var(--i2c-color-white);\n  border-color: var(--i2c-color-primary-500);\n}\n\n.switch.switch--checked:not(.switch--disabled).switch--focused .switch__control {\n  background-color: var(--i2c-color-primary-400);\n  border-color: var(--i2c-color-primary-400);\n}\n.switch.switch--checked:not(.switch--disabled).switch--focused .switch__control .switch__thumb {\n  background-color: var(--i2c-color-white);\n  border-color: var(--i2c-color-primary-500);\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.switch--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.switch__label {\n  line-height: var(--height);\n  margin-left: 0.5em;\n  user-select: none;\n}";

// src/components/switch/switch.ts
var id = 0;
var I2CSwitch = class extends h {
  constructor() {
    super(...arguments);
    this.switchId = `switch-${++id}`;
    this.labelId = `switch-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
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
  handleBlur() {
    this.hasFocus = false;
    emit(this, "i2c-blur");
  }
  handleCheckedChange() {
    if (this.input) {
      this.input.checked = this.checked;
      this.invalid = !this.input.checkValidity();
      emit(this, "i2c-change");
    }
  }
  handleClick() {
    this.checked = !this.checked;
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
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
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
        for=${this.switchId}
        class=${e2({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus
    })}
        @mousedown=${this.handleMouseDown}
      >
        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>

          <input
            id=${this.switchId}
            type="checkbox"
            name=${l(this.name)}
            value=${l(this.value)}
            .checked=${this.checked}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />
        </span>

        <span part="label" id=${this.labelId} class="switch__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
I2CSwitch.styles = r(switch_default);
__decorateClass([
  o('input[type="checkbox"]')
], I2CSwitch.prototype, "input", 2);
__decorateClass([
  r2()
], I2CSwitch.prototype, "hasFocus", 2);
__decorateClass([
  e()
], I2CSwitch.prototype, "name", 2);
__decorateClass([
  e()
], I2CSwitch.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CSwitch.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CSwitch.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CSwitch.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CSwitch.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], I2CSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], I2CSwitch.prototype, "handleDisabledChange", 1);
I2CSwitch = __decorateClass([
  n("i2c-switch")
], I2CSwitch);
var switch_default2 = I2CSwitch;

export {
  switch_default2 as switch_default
};
