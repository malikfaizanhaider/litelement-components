import { LitElement } from 'lit';
export default class I2CFormatBytes extends LitElement {
    value: number;
    unit: 'bytes' | 'bits';
    locale: string;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-format-bytes': I2CFormatBytes;
    }
}
