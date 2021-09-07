import { LitElement } from 'lit';
export default class I2CForm extends LitElement {
    static styles: import("lit").CSSResult;
    form: HTMLElement;
    private formControls;
    novalidate: boolean;
    connectedCallback(): void;
    getFormData(): FormData;
    getFormControls(): HTMLElement[];
    submit(): boolean;
    handleClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    serializeElement(el: HTMLElement, formData: FormData): void | null;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-form': I2CForm;
    }
}
