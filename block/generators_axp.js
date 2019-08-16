module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);



Blockly.JavaScript['axp_power_begin'] = function(block) {
var code =
`
#EXTINC#include "axp20x.h"#END
#VARIABLE AXP20X_Class axp;#END

axp.begin(Wire1);
axp.setPowerOutPut(AXP202_LDO2, AXP202_ON);
axp.enableIRQ(AXP202_ALL_IRQ, AXP202_OFF);
axp.adc1Enable(0xFF, AXP202_OFF);
axp.adc2Enable(0xFF, AXP202_OFF);
axp.adc1Enable(AXP202_BATT_VOL_ADC1 | AXP202_BATT_CUR_ADC1 | AXP202_VBUS_VOL_ADC1 | AXP202_VBUS_CUR_ADC1, AXP202_ON);
axp.enableIRQ(AXP202_VBUS_REMOVED_IRQ | AXP202_VBUS_CONNECT_IRQ | AXP202_CHARGING_FINISHED_IRQ, AXP202_ON);
axp.clearIRQ();

pinMode(AXP202_INT, INPUT_PULLUP);
\n
`
;
return code;
};

Blockly.JavaScript['ischargeing'] = function(block) {
  var code = 'axp.isChargeing()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbattchargecurrent'] = function(block) {
  var code = 'axp.getBattChargeCurrent()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbattdischargecurrent'] = function(block) {
  var code = 'axp.getBattDischargeCurrent()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getvbusvoltage'] = function(block) {
  var code = 'axp.getVbusVoltage()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getvbuscurrent'] = function(block) {
  var code = 'axp.getVbusCurrent()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbattinpower'] = function(block) {
  var code = 'axp.getBattInpower()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gettemp'] = function(block) {
  var code = 'axp.getTemp()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbattvoltage'] = function(block) {
  var code = 'axp.getBattVoltage()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getacinvoltage'] = function(block) {
  var code = 'axp.getAcinVoltage()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbattpercentage'] = function(block) {
  var code = 'axp.getBattPercentage()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['setBlackLight'] = function(block) {
   var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
var code = 
`
ledcWrite(BACKLIGHT_CHANNEL, ${value_name});
`;

  return code;
};


};
