import { LitElement } from 'lit';
export default class SlProgressBar extends LitElement {
    static styles: import("lit").CSSResult;
    percentage: number;
    indeterminate: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-progress-bar': SlProgressBar;
    }
}
