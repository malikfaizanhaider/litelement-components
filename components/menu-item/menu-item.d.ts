import { LitElement } from 'lit';
export default class I2CMenuItem extends LitElement {
    static styles: import("lit").CSSResult;
    menuItem: HTMLElement;
    private hasFocus;
    checked: boolean;
    value: string;
    disabled: boolean;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleBlur(): void;
    handleFocus(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu-item': I2CMenuItem;
    }
}
