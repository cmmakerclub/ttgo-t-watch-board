module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["bma_acceleration_begin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Acceleration begin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_direction'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get direction");
      this.setOutput(true, null);
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_accel_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get raw data X");
      this.setOutput(true, null);
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_accel_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get raw data Y");
      this.setOutput(true, null);
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_accel_z'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get raw data Z");
      this.setOutput(true, null);
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_stepwalk'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get step count");
      this.setOutput(true, null);
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_clear_stepwalk'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Clear step count");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
     this.setTooltip("");
     this.setHelpUrl("");
    }
  };
// ######################################################################
};
