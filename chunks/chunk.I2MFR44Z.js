import {
  T,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\menu-divider\menu-divider.scss
var menu_divider_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.menu-divider {\n  border-top: solid 1px var(--i2c-panel-border-color);\n  margin: var(--i2c-spacing-x-small) 0;\n}";

// src/components/menu-divider/menu-divider.ts
var I2CMenuDivider = class extends h {
  render() {
    return T` <div part="base" class="menu-divider" role="separator" aria-hidden="true"></div> `;
  }
};
I2CMenuDivider.styles = r(menu_divider_default);
I2CMenuDivider = __decorateClass([
  n("i2c-menu-divider")
], I2CMenuDivider);
var menu_divider_default2 = I2CMenuDivider;

export {
  menu_divider_default2 as menu_divider_default
};
