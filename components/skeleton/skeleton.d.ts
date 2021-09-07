import { LitElement } from 'lit';
export default class I2CSkeleton extends LitElement {
    static styles: import("lit").CSSResult;
    effect: 'pulse' | 'sheen' | 'none';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-skeleton': I2CSkeleton;
    }
}
