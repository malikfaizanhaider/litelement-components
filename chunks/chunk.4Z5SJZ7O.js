import {
  e as e2
} from "./chunk.YXKHB4AC.js";
import {
  T,
  e,
  h,
  n,
  r,
  r2
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\avatar\avatar.scss
var avatar_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: inline-block;\n  --size: 3rem;\n}\n\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--i2c-color-gray-300);\n  font-family: var(--i2c-font-sans);\n  font-size: calc(var(--size) * 0.5);\n  font-weight: var(--i2c-font-weight-normal);\n  color: var(--i2c-color-white);\n  overflow: hidden;\n  user-select: none;\n  vertical-align: middle;\n}\n\n.avatar--circle {\n  border-radius: var(--i2c-border-radius-circle);\n}\n\n.avatar--rounded {\n  border-radius: var(--i2c-border-radius-medium);\n}\n\n.avatar--square {\n  border-radius: 0;\n}\n\n.avatar__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.avatar__initials {\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.avatar__image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}";

// src/components/avatar/avatar.ts
var I2CAvatar = class extends h {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.shape = "circle";
  }
  render() {
    return T`
      <div
        part="base"
        tabindex="0"
        class=${e2({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        aria-label=${this.alt}
      >
        ${this.initials ? T`
            <div part="initials" class="avatar__initials">${this.initials}</div> ` : T`
            <div part="icon" class="avatar__icon">
              <slot name="icon">
                <i2c-icon name="person-fill" library="system"></i2c-icon>
              </slot>
            </div>
          `}
        ${this.image && !this.hasError ? T`
            <img part="image" class="avatar__image" src="${this.image}" @error="${() => this.hasError = true}"/>
          ` : ""}
      </div>
    `;
  }
};
I2CAvatar.styles = r(avatar_default);
__decorateClass([
  r2()
], I2CAvatar.prototype, "hasError", 2);
__decorateClass([
  e()
], I2CAvatar.prototype, "image", 2);
__decorateClass([
  e()
], I2CAvatar.prototype, "alt", 2);
__decorateClass([
  e()
], I2CAvatar.prototype, "initials", 2);
__decorateClass([
  e({ reflect: true })
], I2CAvatar.prototype, "shape", 2);
I2CAvatar = __decorateClass([
  n("i2c-avatar")
], I2CAvatar);
var avatar_default2 = I2CAvatar;

export {
  avatar_default2 as avatar_default
};
