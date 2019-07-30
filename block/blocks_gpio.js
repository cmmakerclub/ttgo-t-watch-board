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
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks["io_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["LED (IO18)", "18"],
          ["SW1(IO0)", "0"],
          ["PIEZO (IO25)", "25"],
          ["KNOB (IO36)", "36"],
          ["IO5", "5"],
          ["SDA (IO21)", "21"],
          ["SCL (IO22)", "22"]
        ]), "IO_PIN");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

};

