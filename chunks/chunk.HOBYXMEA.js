import {
  e,
  h,
  n
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/format-date/format-date.ts
var I2CFormatDate = class extends h {
  constructor() {
    super(...arguments);
    this.date = new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return;
    }
    return new Intl.DateTimeFormat(this.locale, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    }).format(date);
  }
};
__decorateClass([
  e()
], I2CFormatDate.prototype, "date", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "locale", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "weekday", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "era", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "year", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "month", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "day", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "hour", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "minute", 2);
__decorateClass([
  e()
], I2CFormatDate.prototype, "second", 2);
__decorateClass([
  e({ attribute: "time-zone-name" })
], I2CFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  e({ attribute: "time-zone" })
], I2CFormatDate.prototype, "timeZone", 2);
__decorateClass([
  e({ attribute: "hour-format" })
], I2CFormatDate.prototype, "hourFormat", 2);
I2CFormatDate = __decorateClass([
  n("i2c-format-date")
], I2CFormatDate);
var format_date_default = I2CFormatDate;

export {
  format_date_default
};
