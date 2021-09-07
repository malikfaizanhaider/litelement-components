import { LitElement } from 'lit';
export default class I2CFormatDate extends LitElement {
    date: Date | string;
    locale: string;
    weekday: 'narrow' | 'short' | 'long';
    era: 'narrow' | 'short' | 'long';
    year: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
    day: 'numeric' | '2-digit';
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    second: 'numeric' | '2-digit';
    timeZoneName: 'short' | 'long';
    timeZone: string;
    hourFormat: 'auto' | '12' | '24';
    render(): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-format-date': I2CFormatDate;
    }
}
