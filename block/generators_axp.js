module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);


  Blockly.JavaScript['axp_power_begin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var code =
`
#EXTINC#include "axp20x.h"#END
#VARIABLE AXP20X_Class axp;
#END
    axp.begin(Wire1);
    axp.setPowerOutPut(AXP202_LDO2, AXP202_ON);
    axp.enableIRQ(AXP202_ALL_IRQ, AXP202_OFF);
    axp.adc1Enable(0xFF, AXP202_OFF);
    axp.adc2Enable(0xFF, AXP202_OFF);
    axp.adc1Enable(AXP202_BATT_VOL_ADC1 | AXP202_BATT_CUR_ADC1 | AXP202_VBUS_VOL_ADC1 | AXP202_VBUS_CUR_ADC1, AXP202_ON);
    axp.enableIRQ(AXP202_VBUS_REMOVED_IRQ | AXP202_VBUS_CONNECT_IRQ | AXP202_CHARGING_FINISHED_IRQ, AXP202_ON);
    axp.clearIRQ();

    pinMode(AXP202_INT, INPUT_PULLUP);\n
`
;
  return code;
  };
  Blockly.JavaScript['ischargeing'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.isChargeing()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getbattchargecurrent'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getBattChargeCurrent()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getbattdischargecurrent'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getBattDischargeCurrent()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getvbusvoltage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getVbusVoltage()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getvbuscurrent'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getVbusCurrent()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getbattinpower'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getBattInpower()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gettemp'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getTemp()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getbattvoltage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getBattVoltage()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getacinvoltage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getAcinVoltage()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getbattpercentage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'axp.getBattPercentage()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 
};
