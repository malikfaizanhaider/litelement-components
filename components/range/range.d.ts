import { LitElement } from 'lit';
export default class I2CRange extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLInputElement;
    output: HTMLOutputElement;
    private inputId;
    private helpTextId;
    private labelId;
    private resizeObserver;
    private hasFocus;
    private hasHelpTextSlot;
    private hasLabelSlot;
    private hasTooltip;
    name: string;
    value: number;
    label: string;
    helpText: string;
    disabled: boolean;
    invalid: boolean;
    min: number;
    max: number;
    step: number;
    tooltip: 'top' | 'bottom' | 'none';
    tooltipFormatter: (value: number) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    setCustomValidity(message: string): void;
    handleInput(): void;
    handleBlur(): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleSlotChange(): void;
    handleTouchStart(): void;
    syncTooltip(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-range': I2CRange;
    }
}
