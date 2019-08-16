module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript["bma_acceleration_begin"] = function(block) {
    var code =
`
#EXTINC#include "CMMC_BMA423.h"#END


#VARIABLEBMA423 bma;#END

bma.begin();\n
`
;
    return code;
  };

  Blockly.JavaScript['bma_get_direction'] = function(block) {
    var code = 'bma.motion_direction()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_accel_x'] = function(block) {
    var code = 'bma.motion_x_axis()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_accel_y'] = function(block) {
    var code = 'bma.motion_y_axis()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_accel_z'] = function(block) {
    var code = 'bma.motion_z_axis()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_stepwalk'] = function(block) {
    
    var code = 'bma.motion_stepcount()';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_clear_stepwalk'] = function(block) {
    
    var code = 'bma.clear_stepcount();';

    return code;
  };
// ######################################################################
};
