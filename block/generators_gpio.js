module.exports = function(Blockly) {
  "use strict";
  Blockly.JavaScript["adc_pin_dummy_input"] = function(block) {
    let dropdown_name = block.getFieldValue("PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["io_pin_dummy_input"] = function(block) {
    let dropdown_name = block.getFieldValue("IO_PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

};
