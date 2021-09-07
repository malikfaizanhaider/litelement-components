import { LitElement } from 'lit';
export default class I2CTabPanel extends LitElement {
    static styles: import("lit").CSSResult;
    private componentId;
    name: string;
    active: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-tab-panel': I2CTabPanel;
    }
}
