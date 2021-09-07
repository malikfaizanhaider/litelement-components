import { LitElement } from 'lit';
export default class I2CRadio extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLInputElement;
    private inputId;
    private labelId;
    private hasFocus;
    name: string;
    value: string;
    disabled: boolean;
    checked: boolean;
    invalid: boolean;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    getAllRadios(): this[];
    getSiblingRadios(): this[];
    handleBlur(): void;
    handleCheckedChange(): void;
    handleClick(): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleMouseDown(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-radio': I2CRadio;
    }
}
