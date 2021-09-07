import { LitElement } from 'lit';
export default class I2CTooltip extends LitElement {
    static styles: import("lit").CSSResult;
    positioner: HTMLElement;
    tooltip: HTMLElement;
    private componentId;
    private target;
    private popover;
    private hoverTimeout;
    content: string;
    placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    distance: number;
    open: boolean;
    skidding: number;
    trigger: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    getTarget(): HTMLElement;
    handleBlur(): void;
    handleClick(): void;
    handleFocus(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleMouseOver(): void;
    handleMouseOut(): void;
    handleOpenChange(): Promise<void>;
    handleOptionsChange(): void;
    handleDisabledChange(): void;
    handleSlotChange(): void;
    hasTrigger(triggerType: string): boolean;
    syncOptions(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-tooltip': I2CTooltip;
    }
}
