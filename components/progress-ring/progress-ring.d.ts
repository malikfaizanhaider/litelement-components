import { LitElement } from 'lit';
export default class I2CProgressRing extends LitElement {
    static styles: import("lit").CSSResult;
    indicator: SVGCircleElement;
    size: number;
    strokeWidth: number;
    percentage: number;
    firstUpdated(): void;
    updateProgress(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-progress-ring': I2CProgressRing;
    }
}
