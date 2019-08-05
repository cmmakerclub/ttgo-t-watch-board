let display = require("./menu/config.group.display");
let common = require("./menu/config.group.common");
let gpio = require("./menu/config.group.gpio");
let sdcard = require("./menu/config.group.sdcard");
let time = require("./menu/config.group.time");
let touch = require("./menu/config.group.touch");

module.exports = {
  //language=HTML format=false
  initial_blocks: `<xml>
                            <block type="arduino_init" deletable="false" x="-100" y="-50"></block>
                            <block type="arduino_loop" deletable="false" x="100" y="-50"></block>
                      </xml>`,
  base_blocks: [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
    gpio,
    display,
    touch,
    sdcard,
    time,
    ...common
  ]
};
