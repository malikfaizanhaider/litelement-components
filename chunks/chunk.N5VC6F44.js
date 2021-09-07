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

// _vgtx8nf3g:D:\DSM-V2\src\components\badge\badge.scss
var badge_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-flex;\n}\n\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--i2c-font-size-x-small);\n  font-weight: var(--i2c-font-weight-semibold);\n  letter-spacing: var(--i2c-letter-spacing-normal);\n  line-height: 1;\n  border-radius: var(--i2c-border-radius-small);\n  white-space: nowrap;\n  padding: 3px 6px;\n  user-select: none;\n  cursor: inherit;\n}\n\n.badge--primary {\n  background-color: var(--i2c-color-primary-500);\n  color: var(--i2c-color-primary-text);\n}\n\n.badge--success {\n  background-color: var(--i2c-color-success-500);\n  color: var(--i2c-color-success-text);\n}\n\n.badge--info {\n  background-color: var(--i2c-color-info-500);\n  color: var(--i2c-color-info-text);\n}\n\n.badge--warning {\n  background-color: var(--i2c-color-warning-500);\n  color: var(--i2c-color-warning-text);\n}\n\n.badge--danger {\n  background-color: var(--i2c-color-danger-500);\n  color: var(--i2c-color-danger-text);\n}\n\n.badge--pill {\n  border-radius: var(--i2c-border-radius-pill);\n}\n\n.badge--pulse {\n  animation: pulse 1.5s infinite;\n}\n\n.badge--pulse.badge--primary {\n  --pulse-color: var(--i2c-color-primary-500);\n}\n\n.badge--pulse.badge--success {\n  --pulse-color: var(--i2c-color-success-500);\n}\n\n.badge--pulse.badge--info {\n  --pulse-color: var(--i2c-color-info-500);\n}\n\n.badge--pulse.badge--warning {\n  --pulse-color: var(--i2c-color-warning-500);\n}\n\n.badge--pulse.badge--danger {\n  --pulse-color: var(--i2c-color-danger-500);\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 var(--pulse-color);\n  }\n  70% {\n    box-shadow: 0 0 0 0.5rem transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}";

// src/components/badge/badge.ts
var I2CBadge = class extends h {
  constructor() {
    super(...arguments);
    this.type = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return T`
      <span
        part="base"
        class=${e2({
      badge: true,
      "badge--primary": this.type === "primary",
      "badge--success": this.type === "success",
      "badge--info": this.type === "info",
      "badge--warning": this.type === "warning",
      "badge--danger": this.type === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
I2CBadge.styles = r(badge_default);
__decorateClass([
  e({ reflect: true })
], I2CBadge.prototype, "type", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CBadge.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CBadge.prototype, "pulse", 2);
I2CBadge = __decorateClass([
  n("i2c-badge")
], I2CBadge);
var badge_default2 = I2CBadge;

export {
  badge_default2 as badge_default
};
