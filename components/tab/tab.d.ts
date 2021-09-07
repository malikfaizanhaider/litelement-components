import { LitElement } from 'lit';
export default class I2CTab extends LitElement {
    static styles: import("lit").CSSResult;
    tab: HTMLElement;
    private componentId;
    panel: string;
    active: boolean;
    closable: boolean;
    disabled: boolean;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleCloseClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-tab': I2CTab;
    }
}
