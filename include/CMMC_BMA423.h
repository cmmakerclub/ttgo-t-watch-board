/***********************************************************************
 * CMMC BMA423 triaxis acceleration for KB-IDE by chiang mai maker club
 ***********************************************************************/

#ifndef bma423_h
#define bma423_h

#include <Arduino.h>
#include <Wire.h>
#include "bma423.h"
#include "struct_def.h"

#if ARDUINO < 100
  #include <WProgram.h>
#else
  #include <Arduino.h>
#endif

#define BMA423_FEATURE_SIZE 64
#define ACCEL_ENABLE    1
#define ACCEL_DISABLE   0

class BMA423
{
public:
  BMA423();
  ~BMA423();

  void begin();
  int motion_direction();
  unsigned int motion_stepcount();
  void clear_stepcount();
  int motion_x_axis();
  int motion_y_axis();
  int motion_z_axis();
  uint16_t motion_activity();


  
protected:
private:
	struct bma4_dev bmd4_dev;
	uint8_t direction = 0;
    int16_t xAcc, yAcc, zAcc = 0;
    uint32_t stepCount = 0;
    uint32_t _stepCount = 0;
    uint8_t activity;

	static uint16_t _bma423_read(uint8_t dev_addr, uint8_t reg_addr, uint8_t *read_data, uint16_t len);
    static uint16_t _bma423_write(uint8_t dev_addr, uint8_t reg_addr, uint8_t *write_data, uint16_t len);
    uint16_t bma_get_dir(direction_t *result);
    uint16_t bma423_accel_enable();
    uint16_t configure_interrupt();
};

#endif /*blink_h*/
