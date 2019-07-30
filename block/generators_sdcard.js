var hexToRgbA = function(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  } else {
    console.error(`${hex} is invalid.`);
  }
};


module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript["sdcard_begin"] = function(block) {
    var code =
      `
  #EXTINC#include <mySD.h>#END
  #VARIABLEFile sdcard;#END
  
    if (!SD.begin(SD_SS, SD_MOSI, SD_MISO, SD_SCK)) {
      Serial.println("initialization failed!");
      delay(1);
      return;
    }
    Serial.println("initialization done...");
  \n
  `;
    return code;
  };

  Blockly.JavaScript["sdcard_write_txt"] = function(block) {
    var value_filename = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('FILENAME'), Blockly.Variables.NAME_TYPE);;
    var value_data = valueToCode(block, "DATA", ORDER_ATOMIC);
    var code =
    `
      sdcard = SD.open("${value_filename}.txt", FILE_WRITE);
      if (sdcard) {
        sdcard.println(String(${value_data}));
        sdcard.flush();
        sdcard.close();
        Serial.println("Write done...");
      } else {
        Serial.println("Write failed.");
      }
      \n
    `;
    return code;
  };

  Blockly.JavaScript["sdcard_write_csv"] = function(block) {
    var value_filename = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('FILENAME'), Blockly.Variables.NAME_TYPE);;
    var value_data1 = valueToCode(block, "DATA1", ORDER_ATOMIC);
    var value_data2 = valueToCode(block, "DATA2", ORDER_ATOMIC);
    var value_data3 = valueToCode(block, "DATA3", ORDER_ATOMIC);
    var value_data4 = valueToCode(block, "DATA4", ORDER_ATOMIC);
    var code =
    `
      sdcard = SD.open("${value_filename}.csv", FILE_WRITE);
      if (sdcard) {
        sdcard.print(String(${value_data1}));
        sdcard.print(",");
        sdcard.print(String(${value_data2}));
        sdcard.print(",");
        sdcard.print(String(${value_data3}));
        sdcard.print(",");
        sdcard.println(String(${value_data4}));
        sdcard.close();
        Serial.println("Write done...");
      } else {
        Serial.println("Write failed.");
      }
      \n
    `;
    return code;
  };

// ######################################################################
};
