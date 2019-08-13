module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript["bma_acceleration_begin"] = function(block) {
    var code =
`
#EXTINC#include "motion_task.h"#END
#VARIABLEQueueHandle_t g_event_queue_handle = NULL;
static EventGroupHandle_t motionEventGroup = NULL;
#END

motion_task_init();\n
`
;
    return code;
  };

  Blockly.JavaScript['bma_get_direction'] = function(block) {
    var code = 'motion_handle_direction(0)';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_accel_x'] = function(block) {
    var code = 'motion_handle_direction(1)';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_accel_y'] = function(block) {
    var code = 'motion_handle_direction(2)';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_accel_z'] = function(block) {
    var code = 'motion_handle_direction(3)';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_get_stepwalk'] = function(block) {
    
    var code = 'motion_handle_stepwalk()';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };
// ######################################################################
};
