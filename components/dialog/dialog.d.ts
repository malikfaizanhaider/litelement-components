import { LitElement } from 'lit';
export default class I2CDialog extends LitElement {
    static styles: import("lit").CSSResult;
    dialog: HTMLElement;
    panel: HTMLElement;
    overlay: HTMLElement;
    private componentId;
    private modal;
    private originalTrigger;
    private hasFooter;
    open: boolean;
    label: string;
    noHeader: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    private requestClose;
    handleKeyDown(event: KeyboardEvent): void;
    handleOpenChange(): Promise<void>;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-dialog': I2CDialog;
    }
}
