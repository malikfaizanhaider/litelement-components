import {
  getTextContent
} from "./chunk.FMCX45AD.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  T,
  h,
  n,
  o,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\menu\menu.scss
var menu_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.menu {\n  padding: var(--i2c-spacing-x-small) 0;\n}\n.menu:focus {\n  outline: none;\n}";

// src/components/menu/menu.ts
var I2CMenu = class extends h {
  constructor() {
    super(...arguments);
    this.items = [];
    this.typeToSelectString = "";
  }
  typeToSelect(key) {
    clearTimeout(this.typeToSelectTimeout);
    this.typeToSelectTimeout = setTimeout(() => this.typeToSelectString = "", 750);
    this.typeToSelectString += key.toLowerCase();
    for (const item of this.items) {
      const slot = item.shadowRoot.querySelector("slot:not([name])");
      const label = getTextContent(slot).toLowerCase().trim();
      if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
        item.focus();
        break;
      }
    }
  }
  syncItems() {
    this.items = [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => el.tagName.toLowerCase() === "i2c-menu-item" && !el.disabled);
  }
  getActiveItem() {
    return this.items.filter((i) => i.shadowRoot.querySelector(".menu-item--focused"))[0];
  }
  setActiveItem(item) {
    item.focus();
  }
  handleClick(event) {
    const target = event.target;
    const item = target.closest("i2c-menu-item");
    if (item && !item.disabled) {
      emit(this, "i2c-select", { detail: { item } });
    }
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      const item = this.getActiveItem();
      event.preventDefault();
      if (item) {
        emit(this, "i2c-select", { detail: { item } });
      }
    }
    if (event.key === " ") {
      event.preventDefault();
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      const selectedItem = this.getActiveItem();
      let index = selectedItem ? this.items.indexOf(selectedItem) : 0;
      if (this.items.length) {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = this.items.length - 1;
        }
        if (index < 0)
          index = 0;
        if (index > this.items.length - 1)
          index = this.items.length - 1;
        this.setActiveItem(this.items[index]);
        return;
      }
    }
    this.typeToSelect(event.key);
  }
  handleSlotChange() {
    this.syncItems();
  }
  render() {
    return T`
      <div part="base" class="menu" role="menu" @click=${this.handleClick} @keydown=${this.handleKeyDown} tabindex="0">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
I2CMenu.styles = r(menu_default);
__decorateClass([
  o(".menu")
], I2CMenu.prototype, "menu", 2);
__decorateClass([
  o("slot")
], I2CMenu.prototype, "defaultSlot", 2);
I2CMenu = __decorateClass([
  n("i2c-menu")
], I2CMenu);
var menu_default2 = I2CMenu;

export {
  menu_default2 as menu_default
};
