import {
  requestInclude
} from "./chunk.DTM5B7PO.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
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

// _vgtx8nf3g:D:\DSM-V2\src\components\include\include.scss
var include_default = ":host {\n  display: block;\n}";

// src/components/include/include.ts
var I2CInclude = class extends h {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].map((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file) {
        return;
      }
      if (!file.ok) {
        emit(this, "i2c-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].map((script) => this.executeScript(script));
      }
      emit(this, "i2c-load");
    } catch (e2) {
      emit(this, "i2c-error", { detail: { status: -1 } });
    }
  }
  render() {
    return T`<slot></slot>`;
  }
};
I2CInclude.styles = r(include_default);
__decorateClass([
  e()
], I2CInclude.prototype, "src", 2);
__decorateClass([
  e()
], I2CInclude.prototype, "mode", 2);
__decorateClass([
  e({ attribute: "allow-scripts", type: Boolean })
], I2CInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], I2CInclude.prototype, "handleSrcChange", 1);
I2CInclude = __decorateClass([
  n("i2c-include")
], I2CInclude);
var include_default2 = I2CInclude;

export {
  include_default2 as include_default
};
