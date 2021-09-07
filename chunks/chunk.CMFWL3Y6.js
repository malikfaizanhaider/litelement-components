import {
  emit
} from "./chunk.I4TE3TJV.js";
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

// _vgtx8nf3g:D:\DSM-V2\src\components\form\form.scss
var form_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}";

// src/components/form/form.ts
var I2CForm = class extends h {
  constructor() {
    super(...arguments);
    this.novalidate = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.formControls = [
      {
        tag: "button",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: (event) => {
          const target = event.target;
          if (target.type === "submit") {
            this.submit();
          }
        }
      },
      {
        tag: "input",
        serialize: (el, formData) => {
          if (!el.name || el.disabled) {
            return;
          }
          if ((el.type === "checkbox" || el.type === "radio") && !el.checked) {
            return;
          }
          if (el.type === "file") {
            [...el.files].map((file) => formData.append(el.name, file));
            return;
          }
          formData.append(el.name, el.value);
        },
        click: (event) => {
          const target = event.target;
          if (target.type === "submit") {
            this.submit();
          }
        },
        keyDown: (event) => {
          const target = event.target;
          if (event.key === "Enter" && !event.defaultPrevented && !["checkbox", "file", "radio"].includes(target.type)) {
            this.submit();
          }
        }
      },
      {
        tag: "select",
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.querySelectorAll("option:checked")];
              if (selectedOptions.length) {
                selectedOptions.map((option) => formData.append(el.name, option.value));
              } else {
                formData.append(el.name, "");
              }
            } else {
              formData.append(el.name, el.value);
            }
          }
        }
      },
      {
        tag: "i2c-button",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: (event) => {
          const target = event.target;
          if (target.submit) {
            this.submit();
          }
        }
      },
      {
        tag: "i2c-checkbox",
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "i2c-color-picker",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "i2c-input",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        keyDown: (event) => {
          if (event.key === "Enter" && !event.defaultPrevented) {
            this.submit();
          }
        }
      },
      {
        tag: "i2c-radio",
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "i2c-range",
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            formData.append(el.name, el.value + "");
          }
        }
      },
      {
        tag: "i2c-select",
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.value];
              if (selectedOptions.length) {
                selectedOptions.map((value) => formData.append(el.name, value));
              } else {
                formData.append(el.name, "");
              }
            } else {
              formData.append(el.name, el.value + "");
            }
          }
        }
      },
      {
        tag: "i2c-switch",
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "i2c-textarea",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "textarea",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      }
    ];
  }
  getFormData() {
    const formData = new FormData();
    const formControls = this.getFormControls();
    formControls.map((el) => this.serializeElement(el, formData));
    return formData;
  }
  getFormControls() {
    const slot = this.form.querySelector("slot");
    const tags = this.formControls.map((control) => control.tag);
    return slot.assignedElements({ flatten: true }).reduce((all, el) => all.concat(el, [...el.querySelectorAll("*")]), []).filter((el) => tags.includes(el.tagName.toLowerCase()));
  }
  submit() {
    const formData = this.getFormData();
    const formControls = this.getFormControls();
    const formControlsThatReport = formControls.filter((el) => typeof el.reportValidity === "function");
    if (!this.novalidate) {
      for (const el of formControlsThatReport) {
        const isValid = el.reportValidity();
        if (!isValid) {
          return false;
        }
      }
    }
    emit(this, "i2c-submit", { detail: { formData, formControls } });
    return true;
  }
  handleClick(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.click) {
        formControl.click(event);
      }
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.keyDown) {
        formControl.keyDown(event);
      }
    }
  }
  serializeElement(el, formData) {
    const tag = el.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag) {
        return formControl.serialize(el, formData);
      }
    }
    return null;
  }
  render() {
    return T`
      <div part="base" class="form" role="form" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <slot></slot>
      </div>
    `;
  }
};
I2CForm.styles = r(form_default);
__decorateClass([
  o(".form")
], I2CForm.prototype, "form", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2CForm.prototype, "novalidate", 2);
I2CForm = __decorateClass([
  n("i2c-form")
], I2CForm);
var form_default2 = I2CForm;

export {
  form_default2 as form_default
};
