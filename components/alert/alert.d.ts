import { LitElement } from 'lit';
export default class I2CAlert extends LitElement {
    static styles: import("lit").CSSResult;
    private autoHideTimeout;
    base: HTMLElement;
    open: boolean;
    closable: boolean;
    type: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    duration: number;
    firstUpdated(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    toast(): Promise<void>;
    restartAutoHide(): void;
    handleCloseClick(): void;
    handleMouseMove(): void;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-alert': I2CAlert;
    }
}
