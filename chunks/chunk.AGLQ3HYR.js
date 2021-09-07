import {
  e as e2
} from "./chunk.YXKHB4AC.js";
import {
  T,
  e,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\radio-group\radio-group.scss
var radio_group_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.radio-group {\n  border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);\n  border-radius: var(--i2c-border-radius-medium);\n  padding: var(--i2c-spacing-large);\n  padding-top: var(--i2c-spacing-x-small);\n}\n.radio-group .radio-group__label {\n  font-family: var(--i2c-input-font-family);\n  font-size: var(--i2c-input-font-size-medium);\n  font-weight: var(--i2c-input-font-weight);\n  color: var(--i2c-input-color);\n  padding: 0 var(--i2c-spacing-xx-small);\n}\n\n::slotted(i2c-radio:not(:last-of-type)) {\n  display: block;\n  margin-bottom: var(--i2c-spacing-xx-small);\n}\n\n.radio-group--no-fieldset {\n  border: none;\n  padding: 0;\n  margin: 0;\n  min-width: 0;\n}\n.radio-group--no-fieldset .radio-group__label {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}";

// src/components/radio-group/radio-group.ts
var I2CRadioGroup = class extends h {
  constructor() {
    super(...arguments);
    this.label = "";
    this.noFieldset = false;
  }
  render() {
    return T`
      <fieldset
        part="base"
        class=${e2({
      "radio-group": true,
      "radio-group--no-fieldset": this.noFieldset
    })}
        role="radiogroup"
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <slot></slot>
      </fieldset>
    `;
  }
};
I2CRadioGroup.styles = r(radio_group_default);
__decorateClass([
  e()
], I2CRadioGroup.prototype, "label", 2);
__decorateClass([
  e({ type: Boolean, attribute: "no-fieldset" })
], I2CRadioGroup.prototype, "noFieldset", 2);
I2CRadioGroup = __decorateClass([
  n("i2c-radio-group")
], I2CRadioGroup);
var radio_group_default2 = I2CRadioGroup;

export {
  radio_group_default2 as radio_group_default
};
