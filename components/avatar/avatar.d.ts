import { LitElement } from 'lit';
export default class I2CAvatar extends LitElement {
    static styles: import("lit").CSSResult;
    private hasError;
    image: string;
    alt: string;
    initials: string;
    shape: 'circle' | 'square' | 'rounded';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-avatar': I2CAvatar;
    }
}
