import { LitElement } from 'lit';
export default class I2CButton extends LitElement {
    static styles: import("lit").CSSResult;
    button: HTMLButtonElement | HTMLLinkElement;
    private hasFocus;
    private hasLabel;
    private hasPrefix;
    private hasSuffix;
    type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
    size: 'small' | 'medium' | 'large';
    caret: boolean;
    disabled: boolean;
    loading: boolean;
    pill: boolean;
    circle: boolean;
    submit: boolean;
    name: string;
    value: string;
    href: string;
    target: '_blank' | '_parent' | '_self' | '_top';
    download: string;
    connectedCallback(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleSlotChange(): void;
    handleBlur(): void;
    handleFocus(): void;
    handleClick(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-button': I2CButton;
    }
}
