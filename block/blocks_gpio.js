module.exports = function(Blockly) {
  "use strict";
  Blockly.Blocks["adc_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["ADC4 (PIN32)", "32"],
          ["ADC5 (PIN33)", "33"],
          ["ADC6 (PIN34)", "34"],
          ["ADC7 (PIN35)", "35"],
          ["KNOB (IO36)", "36"]
        ]), "PIN");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks["io_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["USER BUTTON (IO36)", "USER_BUTTON"],
          ["MOTOR PIN (IO33)", "MOTOR_PIN"],
          ["SCREEN (IO12)", "TFT_BL"]
        ]), "IO_PIN");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['io_blink_without_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blink without delay pin");
    this.appendValueInput("PIN")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("every");
    this.appendValueInput("DELAY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

};

