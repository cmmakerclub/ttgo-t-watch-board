module.exports = function(Blockly) {
  "use strict";

Blockly.Blocks['pcf8563_rtc_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Real Time Clock begin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_datetime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print DateTime (")
        .appendField(new Blockly.FieldDropdown([["HM","HM"], ["YYYY_MM_DD","YYYY_MM_DD"], ["MM_DD_YYYY","MM_DD_YYYY"], ["DD_MM_YYYY","DD_MM_YYYY"], ["YYYY_MM_DD_H_M_S","YYYY_MM_DD_H_M_S"]]), "FORMAT")
        .appendField(")");
    this.setOutput(true, "String");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_set_datetime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set DateTime (")
        .appendField(new Blockly.FieldDropdown([["2019","2019"], ["2020","2020"], ["2021","2021"], ["2022","2022"], ["2023","2023"], ["2024","2024"], ["2025","2025"]]), "YEAR")
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["January","1"], ["February","2"], ["March","3"], ["April","4"], ["May","5"], ["June","6"], ["July","7"], ["Augest","8"], ["September","9"], ["October","10"], ["November","11"], ["December","12"]]), "MONTH")
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([ ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"],
          ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"]]), "DAY")
        .appendField(" / ")
        .appendField(new Blockly.FieldDropdown([ ["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"],
          ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"]]), "HOUR")
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([ ["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"],
          ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"],
          ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], 
          ["56","56"], ["57","57"], ["58","58"], ["59","59"]]), "MINUTE")
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([ ["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"],
          ["18","18"], ["19","19"], ["20","20"], ["21","21"], ["22","22"], ["23","23"], ["24","24"], ["25","25"], ["26","26"], ["27","27"], ["28","28"], ["29","29"], ["30","30"], ["31","31"], ["32","32"], ["33","33"], ["34","34"], ["35","35"], ["36","36"],
          ["37","37"], ["38","38"], ["39","39"], ["40","40"], ["41","41"], ["42","42"], ["43","43"], ["44","44"], ["45","45"], ["46","46"], ["47","47"], ["48","48"], ["49","49"], ["50","50"], ["51","51"], ["52","52"], ["53","53"], ["54","54"], ["55","55"], 
          ["56","56"], ["57","57"], ["58","58"], ["59","59"]]), "SECOUND")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_set_datetime_wifi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set DateTime by Internet (ssid:")
        .appendField(new Blockly.FieldTextInput("YOUR_SSID"), "SSID")
        .appendField("psk:")
        .appendField(new Blockly.FieldTextInput("YOUR_PASSWORD"), "PSK")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_get_hour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get time hour");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_get_minute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get time minute");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_get_secound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get time secound");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_get_day'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get date day");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_get_month'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get date month");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pcf8563_rtc_get_year'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get date year");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


};
