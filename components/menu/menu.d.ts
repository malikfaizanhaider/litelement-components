import { LitElement } from 'lit';
import type I2CMenuItem from '../menu-item/menu-item';
export default class I2CMenu extends LitElement {
    static styles: import("lit").CSSResult;
    menu: HTMLElement;
    defaultSlot: HTMLSlotElement;
    private items;
    private typeToSelectString;
    private typeToSelectTimeout;
    typeToSelect(key: string): void;
    syncItems(): void;
    getActiveItem(): I2CMenuItem;
    setActiveItem(item: I2CMenuItem): void;
    handleClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-menu': I2CMenu;
    }
}
