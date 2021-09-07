import {
  e,
  h,
  n
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/internal/number.ts
function formatBytes(bytes, options) {
  options = Object.assign({
    unit: "bytes",
    locale: void 0
  }, options);
  const byteUnits = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const bitUnits = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"];
  const units = options.unit === "bytes" ? byteUnits : bitUnits;
  const isNegative = bytes < 0;
  bytes = Math.abs(bytes);
  if (bytes === 0)
    return "0 B";
  const i = Math.min(Math.floor(Math.log10(bytes) / 3), units.length - 1);
  const num = Number((bytes / Math.pow(1e3, i)).toPrecision(3));
  const numString = num.toLocaleString(options.locale);
  const prefix = isNegative ? "-" : "";
  return `${prefix}${numString} ${units[i]}`;
}

// src/components/format-bytes/format-bytes.ts
var I2CFormatBytes = class extends h {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.unit = "bytes";
  }
  render() {
    return formatBytes(this.value, {
      unit: this.unit,
      locale: this.locale
    });
  }
};
__decorateClass([
  e({ type: Number })
], I2CFormatBytes.prototype, "value", 2);
__decorateClass([
  e()
], I2CFormatBytes.prototype, "unit", 2);
__decorateClass([
  e()
], I2CFormatBytes.prototype, "locale", 2);
I2CFormatBytes = __decorateClass([
  n("i2c-format-bytes")
], I2CFormatBytes);
var format_bytes_default = I2CFormatBytes;

export {
  format_bytes_default
};
