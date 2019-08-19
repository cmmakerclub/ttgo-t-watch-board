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

Blockly.JavaScript['io_blink_without_delay'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC);
  var code =
  `
#VARIABLE
unsigned long _prevMillis = 0;
unsigned long _curMillis = 0;
const int freq = 5000; 
const int channel = 5;
const int resolution = 8;
bool blinkState = false;
#END

#SETUP
ledcSetup(channel, freq, resolution);
ledcAttachPin(${value_pin}, channel);
#END

#FUNCTION
void blinkWithoutDelay() {
  _curMillis = millis();
  if (_curMillis - _prevMillis >= ${value_delay}) {
    _prevMillis = _curMillis;
    if (blinkState == false) {
      blinkState = true;
      ledcWrite(channel, 255);
    } else {
      blinkState = false;
      ledcWrite(channel, 0);
    }
  }
}
#END
blinkWithoutDelay();
\n
`;
  return code;
};

};
