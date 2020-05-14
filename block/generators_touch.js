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

  Blockly.JavaScript["touch_begin"] = function(block) {
    var code =
      `
  #EXTINC#include <FT5206.h>#END
  #VARIABLEstatic FT5206_Class *tp = nullptr;
  TP_Point p;
  #END
  #SETUPpinMode(TOUCH_INT, INPUT);
  Wire.begin(TOUCH_SDA, TOUCH_SCL);
  tp = new FT5206_Class();
  if (!tp->begin(Wire))
  {
    Serial.println("Couldn't start FT5206 touchscreen controller");
  } else {
    Serial.println("Capacitive touchscreen started");
  }
  #END
  \n
  `;
    return code;
  };

  Blockly.JavaScript["touch_condition"] = function(block) {
    var statements_mqtt_statement = Blockly.JavaScript.statementToCode(block,"TOUCH_STATEMENT");

    var code = `
    if (tp->touched())
    {
      p = tp->getPoint();
      int point_x = map(p.x, 240, 0, 0, 240);
      int point_y = map(p.y, 240, 0, 0, 240);
      point_x = 200 - point_x;
      point_y = 200 - point_y;
      ${statements_mqtt_statement}
    }
    \n
    `;
    return code;
  };


  Blockly.JavaScript['touch_get_position_x'] = function(block) {
    
    var code = '(int)point_x';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['touch_get_position_y'] = function(block) {
    
    var code = '(int)point_y';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };
// ######################################################################
};
