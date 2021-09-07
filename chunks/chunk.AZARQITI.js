import {
  focusVisible
} from "./chunk.XAZSQ3AT.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
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

// _vgtx8nf3g:D:\DSM-V2\src\components\details\details.scss
var details_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.details {\n  border: solid 1px var(--i2c-color-gray-200);\n  border-radius: var(--i2c-border-radius-medium);\n  overflow-anchor: none;\n}\n\n.details--disabled {\n  opacity: 0.5;\n}\n\n.details__header {\n  display: flex;\n  align-items: center;\n  border-radius: inherit;\n  padding: var(--i2c-spacing-medium);\n  user-select: none;\n  cursor: pointer;\n}\n.details__header:focus {\n  outline: none;\n}\n\n.focus-visible .details__header:focus {\n  box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-focus-ring-color-primary);\n}\n\n.details--disabled .details__header {\n  cursor: not-allowed;\n}\n.details--disabled .details__header:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.details__summary {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n}\n\n.details__summary-icon {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  transition: var(--i2c-transition-medium) transform ease;\n}\n\n.details--open .details__summary-icon {\n  transform: rotate(90deg);\n}\n\n.details__body {\n  overflow: hidden;\n}\n\n.details__content {\n  padding: var(--i2c-spacing-medium);\n}";

// src/components/details/details.ts
var id = 0;
var I2CDetails = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `details-${++id}`;
    this.open = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => focusVisible.observe(this.details));
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? "auto" : "0";
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    focusVisible.unobserve(this.details);
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
  handleSummaryClick() {
    if (!this.disabled) {
      this.open ? this.hide() : this.show();
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.open ? this.hide() : this.show();
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "i2c-show");
      await stopAnimations(this);
      this.body.hidden = false;
      const { keyframes, options } = getAnimation(this, "details.show");
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "details.hide");
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = "auto";
      emit(this, "i2c-after-hide");
    }
  }
  render() {
    return T`
      <div
        part="base"
        class=${e2({
      details: true,
      "details--open": this.open,
      "details--disabled": this.disabled
    })}
      >
        <header
          part="header"
          id=${`${this.componentId}-header`}
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls=${`${this.componentId}-content`}
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <i2c-icon name="chevron-right" library="system"></i2c-icon>
          </span>
        </header>

        <div class="details__body">
          <div
            part="content"
            id=${`${this.componentId}-content`}
            class="details__content"
            role="region"
            aria-labelledby=${`${this.componentId}-header`}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
I2CDetails.styles = r(details_default);
__decorateClass([
  o(".details")
], I2CDetails.prototype, "details", 2);
__decorateClass([
  o(".details__header")
], I2CDetails.prototype, "header", 2);
__decorateClass([
  o(".details__body")
], I2CDetails.prototype, "body", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CDetails.prototype, "open", 2);
__decorateClass([
  e()
], I2CDetails.prototype, "summary", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CDetails.prototype, "disabled", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], I2CDetails.prototype, "handleOpenChange", 1);
I2CDetails = __decorateClass([
  n("i2c-details")
], I2CDetails);
var details_default2 = I2CDetails;
setDefaultAnimation("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
setDefaultAnimation("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});

export {
  details_default2 as details_default
};
