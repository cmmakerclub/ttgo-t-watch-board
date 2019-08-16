module.exports = function(Blockly) {
  "use strict";

Blockly.Blocks['axp_power_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Power Management Begin");
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
        .appendField("is Charging");
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
        .appendField("Get Battery Charge Current (mA)");
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
        .appendField("Get Battery Discharge Current (mA)");
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
        .appendField("Get Vbus Voltage (mV)");
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
        .appendField("Get Vbus Current (mA)");
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
        .appendField("Get Battery Power");
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
        .appendField("Get Temperature inside (Celsius)");
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
        .appendField("Get Battery Voltage (mV)");
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
        .appendField("Get Acin Voltage");
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
        .appendField("Get Battery Percentage (%)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setBlackLight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Black Light");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(0-255)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


};
