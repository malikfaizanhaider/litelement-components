import {
  watch
} from "./chunk.BD26TKS4.js";
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

// _vgtx8nf3g:D:\DSM-V2\src\components\progress-ring\progress-ring.scss
var progress_ring_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --track-color: var(--i2c-color-gray-200);\n  --indicator-color: var(--i2c-color-primary-500);\n  display: inline-flex;\n}\n\n.progress-ring {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.progress-ring__image {\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n}\n\n.progress-ring__track {\n  stroke: var(--track-color);\n}\n\n.progress-ring__indicator {\n  stroke: var(--indicator-color);\n  transition: 0.35s stroke-dashoffset, 0.35s stroke;\n}\n\n.progress-ring__label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  user-select: none;\n}";

// src/components/progress-ring/progress-ring.ts
var I2CProgressRing = class extends h {
  constructor() {
    super(...arguments);
    this.size = 128;
    this.strokeWidth = 4;
  }
  firstUpdated() {
    this.updateProgress();
  }
  updateProgress() {
    const radius = this.indicator.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - this.percentage / 100 * circumference;
    this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
    this.indicator.style.strokeDashoffset = `${offset}`;
  }
  render() {
    return T`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.percentage}"
      >
        <svg class="progress-ring__image" width=${this.size} height=${this.size}>
          <circle
            class="progress-ring__track"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            fill="transparent"
            r=${this.size / 2 - this.strokeWidth * 2}
            cx=${this.size / 2}
            cy=${this.size / 2}
          ></circle>

          <circle
            class="progress-ring__indicator"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            fill="transparent"
            r=${this.size / 2 - this.strokeWidth * 2}
            cx=${this.size / 2}
            cy=${this.size / 2}
          ></circle>
        </svg>

        <span part="label" class="progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `;
  }
};
I2CProgressRing.styles = r(progress_ring_default);
__decorateClass([
  o(".progress-ring__indicator")
], I2CProgressRing.prototype, "indicator", 2);
__decorateClass([
  e({ type: Number })
], I2CProgressRing.prototype, "size", 2);
__decorateClass([
  e({ attribute: "stroke-width", type: Number })
], I2CProgressRing.prototype, "strokeWidth", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], I2CProgressRing.prototype, "percentage", 2);
__decorateClass([
  watch("percentage", { waitUntilFirstUpdate: true })
], I2CProgressRing.prototype, "updateProgress", 1);
I2CProgressRing = __decorateClass([
  n("i2c-progress-ring")
], I2CProgressRing);
var progress_ring_default2 = I2CProgressRing;

export {
  progress_ring_default2 as progress_ring_default
};
