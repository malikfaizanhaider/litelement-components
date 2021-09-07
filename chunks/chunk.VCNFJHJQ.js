import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  dist_exports
} from "./chunk.LVGT5UFI.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  T,
  e,
  e2,
  h,
  n,
  r
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\animation\animation.scss
var animation_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: contents;\n}";

// src/components/animation/animation.ts
var I2CAnimation = class extends h {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
  }
  get currentTime() {
    var _a;
    return ((_a = this.animation) == null ? void 0 : _a.currentTime) || 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
    this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  async handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handleAnimationFinish() {
    this.play = false;
    this.hasStarted = false;
    emit(this, "i2c-finish");
  }
  handleAnimationCancel() {
    this.play = false;
    this.hasStarted = false;
    emit(this, "i2c-cancel");
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        emit(this, "i2c-start");
      }
      this.play ? this.animation.play() : this.animation.pause();
      return true;
    } else {
      return false;
    }
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    const easing = dist_exports.easings[this.easing] || this.easing;
    const keyframes = this.keyframes ? this.keyframes : dist_exports[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      emit(this, "i2c-start");
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (e3) {
    }
  }
  finish() {
    try {
      this.animation.finish();
    } catch (e3) {
    }
  }
  render() {
    return T` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
I2CAnimation.styles = r(animation_default);
__decorateClass([
  e2("slot")
], I2CAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  e()
], I2CAnimation.prototype, "name", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CAnimation.prototype, "play", 2);
__decorateClass([
  e({ type: Number })
], I2CAnimation.prototype, "delay", 2);
__decorateClass([
  e()
], I2CAnimation.prototype, "direction", 2);
__decorateClass([
  e({ type: Number })
], I2CAnimation.prototype, "duration", 2);
__decorateClass([
  e()
], I2CAnimation.prototype, "easing", 2);
__decorateClass([
  e({ attribute: "end-delay", type: Number })
], I2CAnimation.prototype, "endDelay", 2);
__decorateClass([
  e()
], I2CAnimation.prototype, "fill", 2);
__decorateClass([
  e({ type: Number })
], I2CAnimation.prototype, "iterations", 2);
__decorateClass([
  e({ attribute: "iteration-start", type: Number })
], I2CAnimation.prototype, "iterationStart", 2);
__decorateClass([
  e({ attribute: false })
], I2CAnimation.prototype, "keyframes", 2);
__decorateClass([
  e({ attribute: "playback-rate", type: Number })
], I2CAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch("name"),
  watch("delay"),
  watch("direction"),
  watch("duration"),
  watch("easing"),
  watch("endDelay"),
  watch("fill"),
  watch("iterations"),
  watch("iterationsStart"),
  watch("keyframes")
], I2CAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], I2CAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], I2CAnimation.prototype, "handlePlaybackRateChange", 1);
I2CAnimation = __decorateClass([
  n("i2c-animation")
], I2CAnimation);
var animation_default2 = I2CAnimation;

export {
  animation_default2 as animation_default
};
