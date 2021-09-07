import {
  animateTo,
  stopAnimations
} from "./chunk.NVGT36PI.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.EVK2ASE6.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit,
  waitForEvent
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
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\alert\alert.scss
var alert_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: contents;\n  margin: 0;\n}\n\n.alert {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  background-color: var(--i2c-color-white);\n  border: solid 1px var(--i2c-color-gray-200);\n  border-top-width: 3px;\n  border-radius: var(--i2c-border-radius-medium);\n  box-shadow: var(--box-shadow);\n  font-family: var(--i2c-font-sans);\n  font-size: var(--i2c-font-size-small);\n  font-weight: var(--i2c-font-weight-normal);\n  line-height: 1.6;\n  color: var(--i2c-color-gray-700);\n  margin: inherit;\n}\n\n.alert__icon {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: var(--i2c-font-size-large);\n}\n.alert__icon ::slotted(*) {\n  margin-left: var(--i2c-spacing-large);\n}\n\n.alert--primary {\n  border-top-color: var(--i2c-color-primary-500);\n}\n.alert--primary .alert__icon {\n  color: var(--i2c-color-primary-500);\n}\n\n.alert--success {\n  border-top-color: var(--i2c-color-success-500);\n}\n.alert--success .alert__icon {\n  color: var(--i2c-color-success-500);\n}\n\n.alert--info {\n  border-top-color: var(--i2c-color-info-500);\n}\n.alert--info .alert__icon {\n  color: var(--i2c-color-info-500);\n}\n\n.alert--warning {\n  border-top-color: var(--i2c-color-warning-500);\n}\n.alert--warning .alert__icon {\n  color: var(--i2c-color-warning-500);\n}\n\n.alert--danger {\n  border-top-color: var(--i2c-color-danger-500);\n}\n.alert--danger .alert__icon {\n  color: var(--i2c-color-danger-500);\n}\n\n.alert__message {\n  flex: 1 1 auto;\n  padding: var(--i2c-spacing-large);\n  overflow: hidden;\n}\n\n.alert__close {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: var(--i2c-font-size-large);\n  padding-right: var(--i2c-spacing-medium);\n}";

// src/components/alert/alert.ts
var toastStack = Object.assign(document.createElement("div"), { className: "i2c-toast-stack" });
var I2CAlert = class extends h {
  constructor() {
    super(...arguments);
    this.open = false;
    this.closable = false;
    this.type = "primary";
    this.duration = Infinity;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  async show() {
    if (this.open) {
      return;
    }
    this.open = true;
    return waitForEvent(this, "i2c-after-show");
  }
  async hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
    return waitForEvent(this, "i2c-after-hide");
  }
  async toast() {
    return new Promise((resolve) => {
      if (!toastStack.parentElement) {
        document.body.append(toastStack);
      }
      toastStack.appendChild(this);
      requestAnimationFrame(() => {
        this.clientWidth;
        this.show();
      });
      this.addEventListener("i2c-after-hide", () => {
        toastStack.removeChild(this);
        resolve();
        if (!toastStack.querySelector("i2c-alert")) {
          toastStack.remove();
        }
      }, { once: true });
    });
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }
  handleCloseClick() {
    this.hide();
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "i2c-show");
      if (this.duration < Infinity) {
        this.restartAutoHide();
      }
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "alert.show");
      await animateTo(this.base, keyframes, options);
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      clearTimeout(this.autoHideTimeout);
      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "alert.hide");
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;
      emit(this, "i2c-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  render() {
    return T`
      <div
        part="base"
        class=${e2({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--primary": this.type === "primary",
      "alert--success": this.type === "success",
      "alert--info": this.type === "info",
      "alert--warning": this.type === "warning",
      "alert--danger": this.type === "danger"
    })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable ? T`
              <span class="alert__close">
                <i2c-icon-button
                  exportparts="base:close-button"
                  name="x"
                  library="system"
                  @click=${this.handleCloseClick}
                ></i2c-icon-button>
              </span>
            ` : ""}
      </div>
    `;
  }
};
I2CAlert.styles = r(alert_default);
__decorateClass([
  o('[part="base"]')
], I2CAlert.prototype, "base", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CAlert.prototype, "open", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CAlert.prototype, "closable", 2);
__decorateClass([
  e({ reflect: true })
], I2CAlert.prototype, "type", 2);
__decorateClass([
  e({ type: Number })
], I2CAlert.prototype, "duration", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], I2CAlert.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("duration")
], I2CAlert.prototype, "handleDurationChange", 1);
I2CAlert = __decorateClass([
  n("i2c-alert")
], I2CAlert);
var alert_default2 = I2CAlert;
setDefaultAnimation("alert.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("alert.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 250, easing: "ease" }
});

export {
  alert_default2 as alert_default
};
