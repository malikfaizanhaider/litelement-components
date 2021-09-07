import {
  l as l2
} from "./chunk.ORQOX5KX.js";
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

// _vgtx8nf3g:D:\DSM-V2\src\components\checkbox\checkbox.scss
var checkbox_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-block;\n}\n\n.checkbox {\n  display: inline-flex;\n  align-items: center;\n  font-family: var(--i2c-input-font-family);\n  font-size: var(--i2c-input-font-size-medium);\n  font-weight: var(--i2c-input-font-weight);\n  color: var(--i2c-input-color);\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.checkbox__control {\n  flex: 0 0 auto;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--i2c-toggle-size);\n  height: var(--i2c-toggle-size);\n  border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);\n  border-radius: 2px;\n  background-color: var(--i2c-input-background-color);\n  color: var(--i2c-color-white);\n  transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color, var(--i2c-transition-fast) color, var(--i2c-transition-fast) box-shadow;\n}\n.checkbox__control input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n}\n.checkbox__control .checkbox__icon {\n  display: inline-flex;\n  width: var(--i2c-toggle-size);\n  height: var(--i2c-toggle-size);\n}\n.checkbox__control .checkbox__icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {\n  border-color: var(--i2c-input-border-color-hover);\n  background-color: var(--i2c-input-background-color-hover);\n}\n\n.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control {\n  border-color: var(--i2c-input-border-color-focus);\n  background-color: var(--i2c-input-background-color-focus);\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.checkbox--checked .checkbox__control,\n.checkbox--indeterminate .checkbox__control {\n  border-color: var(--i2c-color-primary-500);\n  background-color: var(--i2c-color-primary-500);\n}\n\n.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,\n.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {\n  border-color: var(--i2c-color-primary-400);\n  background-color: var(--i2c-color-primary-400);\n}\n\n.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,\n.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control {\n  border-color: var(--i2c-color-primary-400);\n  background-color: var(--i2c-color-primary-400);\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.checkbox--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.checkbox__label {\n  line-height: var(--i2c-toggle-size);\n  margin-left: 0.5em;\n  user-select: none;\n}\n\n:host([theme~=lpc]) [part=base] {\n  border: 1px solid var(--i2c-color-gray-200);\n  padding: var(--i2c-spacing-large);\n  border-radius: var(--i2c-border-radius-medium);\n}\n\n:host([theme~=lpc]) [part=control] {\n  border-radius: var(--i2c-border-radius-circle);\n}\n\n:host([theme~=lpc]) [part=checked-icon] {\n  width: var(--i2c-font-size-x-small);\n  height: var(--i2c-font-size-x-small);\n}";

// src/components/checkbox/checkbox.ts
var id = 0;
var I2CCheckbox = class extends h {
  constructor() {
    super(...arguments);
    this.inputId = `checkbox-${++id}`;
    this.labelId = `checkbox-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emit(this, "i2c-change");
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "i2c-blur");
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
  handleLabelMouseDown(event) {
    event.preventDefault();
    this.input.focus();
  }
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }
  render() {
    return T`
      <label
        part="base"
        class=${e2({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
        for=${this.inputId}
        @mousedown=${this.handleLabelMouseDown}
      >
        <span part="control" class="checkbox__control">
          ${this.checked ? T`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
          ${!this.checked && this.indeterminate ? T`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}

          <input
            id=${this.inputId}
            type="checkbox"
            name=${l(this.name)}
            value=${l(this.value)}
            .indeterminate=${l2(this.indeterminate)}
            .checked=${l2(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="checkbox"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
        </span>

        <span part="label" id=${this.labelId} class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
I2CCheckbox.styles = r(checkbox_default);
__decorateClass([
  o('input[type="checkbox"]')
], I2CCheckbox.prototype, "input", 2);
__decorateClass([
  r2()
], I2CCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  e()
], I2CCheckbox.prototype, "name", 2);
__decorateClass([
  e()
], I2CCheckbox.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CCheckbox.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CCheckbox.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CCheckbox.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CCheckbox.prototype, "invalid", 2);
__decorateClass([
  watch("disabled")
], I2CCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true }),
  watch("indeterminate", { waitUntilFirstUpdate: true })
], I2CCheckbox.prototype, "handleStateChange", 1);
I2CCheckbox = __decorateClass([
  n("i2c-checkbox")
], I2CCheckbox);
var checkbox_default2 = I2CCheckbox;

export {
  checkbox_default2 as checkbox_default
};
