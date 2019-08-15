module.exports = function(Blockly) {
  "use strict";

Blockly.Blocks['axp_power_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("axp_power_begin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ischargeing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("isChargeing");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getbattchargecurrent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBattChargeCurrent");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getbattdischargecurrent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBattDischargeCurrent");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getvbusvoltage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getVbusVoltage");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getvbuscurrent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getVbusCurrent");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getbattinpower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBattInpower");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['gettemp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getTemp");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getbattvoltage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBattVoltage");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getacinvoltage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getAcinVoltage");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['getbattpercentage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBattPercentage");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
///////////////////////////////////////////////////////

};
