import { LitElement } from 'lit';
export default class I2CButtonGroup extends LitElement {
    static styles: import("lit").CSSResult;
    defaultSlot: HTMLSlotElement;
    label: string;
    handleFocus(event: CustomEvent): void;
    handleBlur(event: CustomEvent): void;
    handleMouseOver(event: CustomEvent): void;
    handleMouseOut(event: CustomEvent): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-button-group': I2CButtonGroup;
    }
}
