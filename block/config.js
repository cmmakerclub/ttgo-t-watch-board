let display = require("./menu/config.group.display");
let common = require("./menu/config.group.common");
let gpio = require("./menu/config.group.gpio");
let sdcard = require("./menu/config.group.sdcard");
let time = require("./menu/config.group.time");
let touch = require("./menu/config.group.touch");
let acceleraation = require("./menu/config.group.accel");
let axp = require("./menu/config.group.axp");
let rtc = require("./menu/config.group.rtc");

module.exports = {
  blocks: [
    gpio,
    display,
    touch,
    acceleraation,
    axp,
    rtc,
    sdcard,
    time
  ],
};
