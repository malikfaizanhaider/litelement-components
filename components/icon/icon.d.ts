import { LitElement } from 'lit';
export default class I2CIcon extends LitElement {
    static styles: import("lit").CSSResult;
    private svg;
    name: string;
    src: string;
    label: string;
    library: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    getLabel(): string;
    private getUrl;
    redraw(): void;
    setIcon(): Promise<void>;
    handleChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-icon': I2CIcon;
    }
}
