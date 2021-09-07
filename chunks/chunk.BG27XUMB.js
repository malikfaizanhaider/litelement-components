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
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\tag\tag.scss
var tag_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-block;\n}\n\n.tag {\n  display: flex;\n  align-items: center;\n  border: solid 1px;\n  line-height: 1;\n  white-space: nowrap;\n  user-select: none;\n  cursor: default;\n}\n\n.tag__clear::part(base) {\n  color: inherit;\n  padding: 0;\n}\n\n.tag--primary {\n  background-color: var(--i2c-color-primary-100);\n  border-color: var(--i2c-color-primary-200);\n  color: var(--i2c-color-primary-700);\n}\n\n.tag--success {\n  background-color: var(--i2c-color-success-100);\n  border-color: var(--i2c-color-success-200);\n  color: var(--i2c-color-success-700);\n}\n\n.tag--info {\n  background-color: var(--i2c-color-info-100);\n  border-color: var(--i2c-color-info-200);\n  color: var(--i2c-color-info-700);\n}\n\n.tag--warning {\n  background-color: var(--i2c-color-warning-100);\n  border-color: var(--i2c-color-warning-200);\n  color: var(--i2c-color-warning-700);\n}\n\n.tag--danger {\n  background-color: var(--i2c-color-danger-100);\n  border-color: var(--i2c-color-danger-200);\n  color: var(--i2c-color-danger-700);\n}\n\n.tag--small {\n  font-size: var(--i2c-button-font-size-small);\n  height: calc(var(--i2c-input-height-small) * 0.8);\n  line-height: calc(var(--i2c-input-height-small) - var(--i2c-input-border-width) * 2);\n  border-radius: var(--i2c-input-border-radius-small);\n  padding: 0 var(--i2c-spacing-x-small);\n}\n.tag--small .tag__clear {\n  margin-left: var(--i2c-spacing-xx-small);\n  margin-right: calc(-1 * var(--i2c-spacing-xxx-small));\n}\n\n.tag--medium {\n  font-size: var(--i2c-button-font-size-medium);\n  height: calc(var(--i2c-input-height-medium) * 0.8);\n  line-height: calc(var(--i2c-input-height-medium) - var(--i2c-input-border-width) * 2);\n  border-radius: var(--i2c-input-border-radius-medium);\n  padding: 0 var(--i2c-spacing-small);\n}\n.tag--medium .tag__clear {\n  margin-left: var(--i2c-spacing-xx-small);\n  margin-right: calc(-1 * var(--i2c-spacing-xx-small));\n}\n\n.tag--large {\n  font-size: var(--i2c-button-font-size-large);\n  height: calc(var(--i2c-input-height-large) * 0.8);\n  line-height: calc(var(--i2c-input-height-large) - var(--i2c-input-border-width) * 2);\n  border-radius: var(--i2c-input-border-radius-large);\n  padding: 0 var(--i2c-spacing-medium);\n}\n.tag--large .tag__clear {\n  margin-left: var(--i2c-spacing-xx-small);\n  margin-right: calc(-1 * var(--i2c-spacing-x-small));\n}\n\n.tag--pill {\n  border-radius: var(--i2c-border-radius-pill);\n}";

// src/components/tag/tag.ts
var I2CTag = class extends h {
  constructor() {
    super(...arguments);
    this.type = "primary";
    this.size = "medium";
    this.pill = false;
    this.clearable = false;
  }
  handleClearClick() {
    emit(this, "i2c-clear");
  }
  render() {
    return T`
      <span
        part="base"
        class=${e2({
      tag: true,
      "tag--primary": this.type === "primary",
      "tag--success": this.type === "success",
      "tag--info": this.type === "info",
      "tag--warning": this.type === "warning",
      "tag--danger": this.type === "danger",
      "tag--text": this.type === "text",
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      "tag--pill": this.pill,
      "tag--clearable": this.clearable
    })}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.clearable ? T`
              <i2c-icon-button
                exportparts="base:clear-button"
                name="x"
                library="system"
                class="tag__clear"
                @click=${this.handleClearClick}
              ></i2c-icon-button>
            ` : ""}
      </span>
    `;
  }
};
I2CTag.styles = r(tag_default);
__decorateClass([
  e({ reflect: true })
], I2CTag.prototype, "type", 2);
__decorateClass([
  e({ reflect: true })
], I2CTag.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CTag.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean })
], I2CTag.prototype, "clearable", 2);
I2CTag = __decorateClass([
  n("i2c-tag")
], I2CTag);
var tag_default2 = I2CTag;

export {
  tag_default2 as tag_default
};
