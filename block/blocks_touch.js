module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["touch_begin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Touch begin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["touch_condition"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("IF touch on display")
      this.appendStatementInput("TOUCH_STATEMENT")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['touch_get_position_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get toucher X");
      this.setOutput(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['touch_get_position_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get toucher Y");
      this.setOutput(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
// ######################################################################
};
