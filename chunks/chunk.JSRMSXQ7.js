import {
  createPopper
} from "./chunk.GADG7AUG.js";
import {
  animateTo,
  parseDuration,
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

// _vgtx8nf3g:D:\DSM-V2\src\components\tooltip\tooltip.scss
var tooltip_default = ':host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --max-width: 20rem;\n  --hide-delay: 0ms;\n  --show-delay: 150ms;\n  display: contents;\n}\n\n.tooltip-positioner {\n  position: absolute;\n  z-index: var(--i2c-z-index-tooltip);\n  pointer-events: none;\n}\n\n.tooltip {\n  max-width: var(--max-width);\n  border-radius: var(--i2c-tooltip-border-radius);\n  background-color: var(--i2c-tooltip-background-color);\n  font-family: var(--i2c-tooltip-font-family);\n  font-size: var(--i2c-tooltip-font-size);\n  font-weight: var(--i2c-tooltip-font-weight);\n  line-height: var(--i2c-tooltip-line-height);\n  color: var(--i2c-tooltip-color);\n  padding: var(--i2c-tooltip-padding);\n}\n.tooltip:after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n\n.tooltip-positioner[data-popper-placement^=top] .tooltip {\n  transform-origin: bottom;\n}\n.tooltip-positioner[data-popper-placement^=bottom] .tooltip {\n  transform-origin: top;\n}\n.tooltip-positioner[data-popper-placement^=left] .tooltip {\n  transform-origin: right;\n}\n.tooltip-positioner[data-popper-placement^=right] .tooltip {\n  transform-origin: left;\n}\n\n.tooltip-positioner[data-popper-placement^=bottom] .tooltip:after {\n  bottom: 100%;\n  left: calc(50% - var(--i2c-tooltip-arrow-size));\n  border-bottom: var(--i2c-tooltip-arrow-size) solid var(--i2c-tooltip-background-color);\n  border-left: var(--i2c-tooltip-arrow-size) solid transparent;\n  border-right: var(--i2c-tooltip-arrow-size) solid transparent;\n}\n\n.tooltip-positioner[data-popper-placement=bottom-start] .tooltip:after {\n  left: var(--i2c-tooltip-arrow-start-end-offset);\n}\n\n.tooltip-positioner[data-popper-placement=bottom-end] .tooltip:after {\n  right: var(--i2c-tooltip-arrow-start-end-offset);\n  left: auto;\n}\n\n.tooltip-positioner[data-popper-placement^=top] .tooltip:after {\n  top: 100%;\n  left: calc(50% - var(--i2c-tooltip-arrow-size));\n  border-top: var(--i2c-tooltip-arrow-size) solid var(--i2c-tooltip-background-color);\n  border-left: var(--i2c-tooltip-arrow-size) solid transparent;\n  border-right: var(--i2c-tooltip-arrow-size) solid transparent;\n}\n\n.tooltip-positioner[data-popper-placement=top-start] .tooltip:after {\n  left: var(--i2c-tooltip-arrow-start-end-offset);\n}\n\n.tooltip-positioner[data-popper-placement=top-end] .tooltip:after {\n  right: var(--i2c-tooltip-arrow-start-end-offset);\n  left: auto;\n}\n\n.tooltip-positioner[data-popper-placement^=left] .tooltip:after {\n  top: calc(50% - var(--i2c-tooltip-arrow-size));\n  left: 100%;\n  border-left: var(--i2c-tooltip-arrow-size) solid var(--i2c-tooltip-background-color);\n  border-top: var(--i2c-tooltip-arrow-size) solid transparent;\n  border-bottom: var(--i2c-tooltip-arrow-size) solid transparent;\n}\n\n.tooltip-positioner[data-popper-placement=left-start] .tooltip:after {\n  top: var(--i2c-tooltip-arrow-start-end-offset);\n}\n\n.tooltip-positioner[data-popper-placement=left-end] .tooltip:after {\n  top: auto;\n  bottom: var(--i2c-tooltip-arrow-start-end-offset);\n}\n\n.tooltip-positioner[data-popper-placement^=right] .tooltip:after {\n  top: calc(50% - var(--i2c-tooltip-arrow-size));\n  right: 100%;\n  border-right: var(--i2c-tooltip-arrow-size) solid var(--i2c-tooltip-background-color);\n  border-top: var(--i2c-tooltip-arrow-size) solid transparent;\n  border-bottom: var(--i2c-tooltip-arrow-size) solid transparent;\n}\n\n.tooltip-positioner[data-popper-placement=right-start] .tooltip:after {\n  top: var(--i2c-tooltip-arrow-start-end-offset);\n}\n\n.tooltip-positioner[data-popper-placement=right-end] .tooltip:after {\n  top: auto;\n  bottom: var(--i2c-tooltip-arrow-start-end-offset);\n}';

// src/components/tooltip/tooltip.ts
var id = 0;
var I2CTooltip = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `tooltip-${++id}`;
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 10;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.updateComplete.then(() => {
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
      this.target = this.getTarget();
      this.syncOptions();
    });
  }
  firstUpdated() {
    this.tooltip.hidden = !this.open;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur, true);
    this.removeEventListener("focus", this.handleFocus, true);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.removeEventListener("mouseover", this.handleMouseOver);
    this.removeEventListener("mouseout", this.handleMouseOut);
    if (this.popover) {
      this.popover.destroy();
    }
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
  getTarget() {
    const target = [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
    if (!target) {
      throw new Error("Invalid tooltip target: no child element was found.");
    }
    return target;
  }
  handleBlur() {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  }
  handleClick() {
    if (this.hasTrigger("click")) {
      this.open ? this.hide() : this.show();
    }
  }
  handleFocus() {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
    }
  }
  handleMouseOver() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = setTimeout(() => this.show(), delay);
    }
  }
  handleMouseOut() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = setTimeout(() => this.hide(), delay);
    }
  }
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      emit(this, "i2c-show");
      await stopAnimations(this.tooltip);
      if (this.popover) {
        this.popover.destroy();
      }
      this.popover = createPopper(this.target, this.positioner, {
        placement: this.placement,
        strategy: "absolute",
        modifiers: [
          {
            name: "flip",
            options: {
              boundary: "viewport"
            }
          },
          {
            name: "offset",
            options: {
              offset: [this.skidding, this.distance]
            }
          }
        ]
      });
      this.tooltip.hidden = false;
      const { keyframes, options } = getAnimation(this, "tooltip.show");
      await animateTo(this.tooltip, keyframes, options);
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      await stopAnimations(this.tooltip);
      const { keyframes, options } = getAnimation(this, "tooltip.hide");
      await animateTo(this.tooltip, keyframes, options);
      this.tooltip.hidden = true;
      if (this.popover) {
        this.popover.destroy();
      }
      emit(this, "i2c-after-hide");
    }
  }
  handleOptionsChange() {
    this.syncOptions();
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  handleSlotChange() {
    const oldTarget = this.target;
    const newTarget = this.getTarget();
    if (newTarget !== oldTarget) {
      if (oldTarget) {
        oldTarget.removeAttribute("aria-describedby");
      }
      newTarget.setAttribute("aria-describedby", this.componentId);
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  syncOptions() {
    if (this.popover) {
      this.popover.setOptions({
        placement: this.placement,
        strategy: "absolute",
        modifiers: [
          {
            name: "flip",
            options: {
              boundary: "viewport"
            }
          },
          {
            name: "offset",
            options: {
              offset: [this.skidding, this.distance]
            }
          }
        ]
      });
    }
  }
  render() {
    return T`
      <slot @slotchange=${this.handleSlotChange.bind(this)}></slot>

      <div class="tooltip-positioner">
        <div
          part="base"
          id=${this.componentId}
          class=${e2({
      tooltip: true,
      "tooltip--open": this.open
    })}
          role="tooltip"
          aria-hidden=${this.open ? "false" : "true"}
        >
          <slot name="content">${this.content}</slot>
        </div>
      </div>
    `;
  }
};
I2CTooltip.styles = r(tooltip_default);
__decorateClass([
  o(".tooltip-positioner")
], I2CTooltip.prototype, "positioner", 2);
__decorateClass([
  o(".tooltip")
], I2CTooltip.prototype, "tooltip", 2);
__decorateClass([
  e()
], I2CTooltip.prototype, "content", 2);
__decorateClass([
  e()
], I2CTooltip.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CTooltip.prototype, "disabled", 2);
__decorateClass([
  e({ type: Number })
], I2CTooltip.prototype, "distance", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CTooltip.prototype, "open", 2);
__decorateClass([
  e({ type: Number })
], I2CTooltip.prototype, "skidding", 2);
__decorateClass([
  e()
], I2CTooltip.prototype, "trigger", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], I2CTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("placement"),
  watch("distance"),
  watch("skidding")
], I2CTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], I2CTooltip.prototype, "handleDisabledChange", 1);
I2CTooltip = __decorateClass([
  n("i2c-tooltip")
], I2CTooltip);
var tooltip_default2 = I2CTooltip;
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 150, easing: "ease" }
});

export {
  tooltip_default2 as tooltip_default
};
