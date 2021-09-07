import {
  isPreventScrollSupported,
  modal_default
} from "./chunk.VEQH5HOK.js";
import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.MMQCDOAH.js";
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
  hasSlot
} from "./chunk.FMCX45AD.js";
import {
  l
} from "./chunk.5MED2A3H.js";
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
  r,
  r2
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\dialog\dialog.scss
var dialog_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --width: 31rem;\n  --header-spacing: var(--i2c-spacing-large);\n  --body-spacing: var(--i2c-spacing-large);\n  --footer-spacing: var(--i2c-spacing-large);\n  display: contents;\n}\n\n.dialog {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: var(--i2c-z-index-dialog);\n}\n\n.dialog__panel {\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  width: var(--width);\n  max-width: calc(100% - var(--i2c-spacing-xx-large));\n  max-height: calc(100% - var(--i2c-spacing-xx-large));\n  background-color: var(--i2c-panel-background-color);\n  border-radius: var(--i2c-border-radius-medium);\n  box-shadow: var(--i2c-shadow-x-large);\n}\n.dialog__panel:focus {\n  outline: none;\n}\n\n@media screen and (max-width: 420px) {\n  .dialog__panel {\n    max-height: 80vh;\n  }\n}\n.dialog--open .dialog__panel {\n  display: flex;\n  opacity: 1;\n  transform: none;\n}\n\n.dialog__header {\n  flex: 0 0 auto;\n  display: flex;\n}\n\n.dialog__title {\n  flex: 1 1 auto;\n  font-size: var(--i2c-font-size-large);\n  line-height: var(--i2c-line-height-dense);\n  padding: var(--header-spacing);\n}\n\n.dialog__close {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: var(--i2c-font-size-x-large);\n  padding: 0 var(--header-spacing);\n}\n\n.dialog__body {\n  flex: 1 1 auto;\n  padding: var(--body-spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.dialog__footer {\n  flex: 0 0 auto;\n  text-align: right;\n  padding: var(--footer-spacing);\n}\n.dialog__footer ::slotted(i2c-button:not(:first-of-type)) {\n  margin-left: var(--i2c-spacing-x-small);\n}\n\n.dialog:not(.dialog--has-footer) .dialog__footer {\n  display: none;\n}\n\n.dialog__overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--i2c-overlay-background-color);\n}";

// src/components/dialog/dialog.ts
var hasPreventScroll = isPreventScrollSupported();
var id = 0;
var I2CDialog = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `dialog-${++id}`;
    this.hasFooter = false;
    this.open = false;
    this.label = "";
    this.noHeader = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.modal = new modal_default(this);
    this.handleSlotChange();
  }
  firstUpdated() {
    this.dialog.hidden = !this.open;
    if (this.open) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
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
  requestClose() {
    const slRequestClose = emit(this, "i2c-request-close", { cancelable: true });
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "dialog.denyClose");
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      this.requestClose();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "i2c-show");
      this.originalTrigger = document.activeElement;
      this.modal.activate();
      lockBodyScrolling(this);
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      this.dialog.hidden = false;
      if (hasPreventScroll) {
        const slInitialFocus = emit(this, "i2c-initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
          this.panel.focus({ preventScroll: true });
        }
      }
      const panelAnimation = getAnimation(this, "dialog.show");
      const overlayAnimation = getAnimation(this, "dialog.overlay.show");
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      if (!hasPreventScroll) {
        const slInitialFocus = emit(this, "i2c-initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
          this.panel.focus({ preventScroll: true });
        }
      }
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      this.modal.deactivate();
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, "dialog.hide");
      const overlayAnimation = getAnimation(this, "dialog.overlay.hide");
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.dialog.hidden = true;
      unlockBodyScrolling(this);
      const trigger = this.originalTrigger;
      if (trigger && typeof trigger.focus === "function") {
        setTimeout(() => trigger.focus());
      }
      emit(this, "i2c-after-hide");
    }
  }
  handleSlotChange() {
    this.hasFooter = hasSlot(this, "footer");
  }
  render() {
    return T`
      <div
        part="base"
        class=${e2({
      dialog: true,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasFooter
    })}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l(!this.noHeader ? `${this.componentId}-title` : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? T`
                <header part="header" class="dialog__header">
                  <span part="title" class="dialog__title" id=${`${this.componentId}-title`}>
                    <slot name="label"> ${this.label || String.fromCharCode(65279)} </slot>
                  </span>
                  <i2c-icon-button
                    exportparts="base:close-button"
                    class="dialog__close"
                    name="x"
                    library="system"
                    @click="${this.requestClose}"
                  ></i2c-icon-button>
                </header>
              ` : ""}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
I2CDialog.styles = r(dialog_default);
__decorateClass([
  o(".dialog")
], I2CDialog.prototype, "dialog", 2);
__decorateClass([
  o(".dialog__panel")
], I2CDialog.prototype, "panel", 2);
__decorateClass([
  o(".dialog__overlay")
], I2CDialog.prototype, "overlay", 2);
__decorateClass([
  r2()
], I2CDialog.prototype, "hasFooter", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CDialog.prototype, "open", 2);
__decorateClass([
  e({ reflect: true })
], I2CDialog.prototype, "label", 2);
__decorateClass([
  e({ attribute: "no-header", type: Boolean, reflect: true })
], I2CDialog.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], I2CDialog.prototype, "handleOpenChange", 1);
I2CDialog = __decorateClass([
  n("i2c-dialog")
], I2CDialog);
var dialog_default2 = I2CDialog;
setDefaultAnimation("dialog.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("dialog.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("dialog.denyClose", {
  keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }],
  options: { duration: 250 }
});
setDefaultAnimation("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

export {
  dialog_default2 as dialog_default
};
