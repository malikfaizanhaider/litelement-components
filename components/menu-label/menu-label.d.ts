import { LitElement } from 'lit';
export default class I2CMenuLabel extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu-label': I2CMenuLabel;
    }
}
