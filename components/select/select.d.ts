import { LitElement, TemplateResult } from 'lit';
import type I2CDropdown from '../dropdown/dropdown';
import type I2CMenu from '../menu/menu';
import type I2CMenuItem from '../menu-item/menu-item';
export default class I2CSelect extends LitElement {
    static styles: import("lit").CSSResult;
    dropdown: I2CDropdown;
    box: I2CDropdown;
    input: HTMLInputElement;
    menu: I2CMenu;
    private inputId;
    private helpTextId;
    private labelId;
    private resizeObserver;
    private hasFocus;
    private hasHelpTextSlot;
    private hasLabelSlot;
    private isOpen;
    private displayLabel;
    private displayTags;
    multiple: boolean;
    maxTagsVisible: number;
    disabled: boolean;
    name: string;
    placeholder: string;
    size: 'small' | 'medium' | 'large';
    hoist: boolean;
    value: string | Array<string>;
    pill: boolean;
    label: string;
    helpText: string;
    required: boolean;
    clearable: boolean;
    invalid: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    getItemLabel(item: I2CMenuItem): string;
    getItems(): I2CMenuItem[];
    getValueAsArray(): string[];
    handleBlur(): void;
    handleClearClick(event: MouseEvent): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleLabelClick(): void;
    handleMenuSelect(event: CustomEvent): void;
    handleMenuShow(): void;
    handleMenuHide(): void;
    handleMultipleChange(): void;
    handleSlotChange(): Promise<void>;
    handleTagInteraction(event: KeyboardEvent | MouseEvent): void;
    handleValueChange(): Promise<void>;
    resizeMenu(): void;
    syncItemsFromValue(): void;
    syncValueFromItems(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-select': I2CSelect;
    }
}
