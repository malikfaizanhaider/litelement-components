import {
  l
} from "./chunk.5MED2A3H.js";
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

// _vgtx8nf3g:D:\DSM-V2\src\components\menu-item\menu-item.scss
var menu_item_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.menu-item {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  font-family: var(--i2c-font-sans);\n  font-size: var(--i2c-font-size-medium);\n  font-weight: var(--i2c-font-weight-normal);\n  line-height: var(--i2c-line-height-normal);\n  letter-spacing: var(--i2c-letter-spacing-normal);\n  text-align: left;\n  color: var(--i2c-color-gray-700);\n  padding: var(--i2c-spacing-xx-small) var(--i2c-spacing-x-large);\n  transition: var(--i2c-transition-fast) fill;\n  user-select: none;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.menu-item.menu-item--focused:not(.menu-item--disabled) {\n  outline: none;\n  background-color: var(--i2c-color-primary-500);\n  color: var(--i2c-color-white);\n}\n.menu-item.menu-item--disabled {\n  outline: none;\n  color: var(--i2c-color-gray-400);\n  cursor: not-allowed;\n}\n.menu-item .menu-item__label {\n  flex: 1 1 auto;\n}\n.menu-item .menu-item__prefix {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n.menu-item .menu-item__prefix ::slotted(*) {\n  margin-right: var(--i2c-spacing-x-small);\n}\n.menu-item .menu-item__suffix {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n.menu-item .menu-item__suffix ::slotted(*) {\n  margin-left: var(--i2c-spacing-x-small);\n}\n\n.menu-item .menu-item__check {\n  display: flex;\n  position: absolute;\n  left: 0.5em;\n  top: calc(50% - 0.5em);\n  visibility: hidden;\n  align-items: center;\n  font-size: inherit;\n}\n\n.menu-item--checked .menu-item__check {\n  visibility: visible;\n}";

// src/components/menu-item/menu-item.ts
var I2CMenuItem = class extends h {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  focus(options) {
    this.menuItem.focus(options);
  }
  blur() {
    this.menuItem.blur();
  }
  handleBlur() {
    this.hasFocus = false;
  }
  handleFocus() {
    this.hasFocus = true;
  }
  handleMouseEnter() {
    this.focus();
  }
  handleMouseLeave() {
    this.blur();
  }
  render() {
    return T`
      <div
        part="base"
        class=${e2({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--focused": this.hasFocus
    })}
        role="menuitem"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-checked=${this.checked ? "true" : "false"}
        tabindex=${l(!this.disabled ? "0" : void 0)}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <span part="checked-icon" class="menu-item__check">
          <i2c-icon name="check" library="system" aria-hidden="true"></i2c-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
  }
};
I2CMenuItem.styles = r(menu_item_default);
__decorateClass([
  o(".menu-item")
], I2CMenuItem.prototype, "menuItem", 2);
__decorateClass([
  r2()
], I2CMenuItem.prototype, "hasFocus", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CMenuItem.prototype, "checked", 2);
__decorateClass([
  e()
], I2CMenuItem.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CMenuItem.prototype, "disabled", 2);
I2CMenuItem = __decorateClass([
  n("i2c-menu-item")
], I2CMenuItem);
var menu_item_default2 = I2CMenuItem;

export {
  menu_item_default2 as menu_item_default
};
