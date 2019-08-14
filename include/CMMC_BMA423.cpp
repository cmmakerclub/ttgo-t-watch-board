/***********************************************************************
 * CMMC BMA423 triaxis acceleration for KB-IDE by chiang mai maker club
 ***********************************************************************/

#include "CMMC_BMA423.h"

BMA423::BMA423() {}
BMA423::~BMA423() {}

void BMA423::begin() {

   Wire1.begin(SENSOR_SDA, SENSOR_SCL);

   bmd4_dev.dev_addr        = BMA4_I2C_ADDR_SECONDARY;
   bmd4_dev.interface       = BMA4_I2C_INTERFACE;
   bmd4_dev.bus_read        = _bma423_read;
   bmd4_dev.bus_write       = _bma423_write;
   bmd4_dev.delay           = delay;
   bmd4_dev.read_write_len  = 8;
   bmd4_dev.resolution      = 12;
   bmd4_dev.feature_len     = BMA423_FEATURE_SIZE;

   // soft_reset
   uint8_t reg = 0xB6;
   _bma423_write(BMA4_I2C_ADDR_SECONDARY, 0x7E, &reg, 1);
   delay(5);

   uint8_t rslt;
   rslt = bma423_init(&bmd4_dev);
   if (rslt != BMA4_OK) {
   	// Serial.println("bma4 init fail");
   	return false;
   }

   rslt = bma423_write_config_file(&bmd4_dev);
   if (rslt != BMA4_OK) {
   	// Serial.println("bma4 write config fail");
   	return false;
   }

	configure_interrupt();
}

uint16_t BMA423::motion_activity() {
	bma423_activity_output(&activity, &bmd4_dev);
	// Serial.print("activity: ");
	// Serial.println(activity);
	return activity;
}

int BMA423::motion_direction() {
	direction_t result;
	if ( bma_get_dir(&result) == BMA4_OK) {
	   // Serial.println((uint8_t)result);
	   direction = (uint8_t)result;
	   // Serial.print("direction ");
	   // Serial.println(direction);
  	} else {
    	// Serial.println("fail...");
  	}

  	return direction;

}

unsigned int BMA423::motion_stepcount() {
	uint16_t rlst;
	uint16_t int_status = 0;
	char buf[64];

	rlst = bma423_read_int_status(&int_status, &bmd4_dev);

	if (int_status & BMA423_STEP_CNTR_INT) {
		// Serial.printf("Step count\n");
    	if (bma423_step_counter_output(&stepCount, &bmd4_dev) == BMA4_OK) {
      		// Serial.println(stepCount);
    	}
  	} else if (int_status & BMA423_WAKEUP_INT) {
  		// Serial.printf("BMA423_WAKEUP_INT\n");
  	}

  	return stepCount;
}

int BMA423::motion_x_axis() {
	direction_t result;
	bma_get_dir(&result);
  	return xAcc;
}

int BMA423::motion_y_axis() {
	direction_t result;
	bma_get_dir(&result);
  	return yAcc;
}

int BMA423::motion_z_axis() {
	direction_t result;
	bma_get_dir(&result);
  	return zAcc;
}


uint16_t BMA423::_bma423_read(uint8_t dev_addr, uint8_t reg_addr, uint8_t *read_data, uint16_t len)
{
    uint16_t ret = 0;
    Wire1.beginTransmission(dev_addr);
    Wire1.write(reg_addr);
    Wire1.endTransmission(false);
    uint8_t cnt = Wire1.requestFrom(dev_addr, (uint8_t)len, (uint8_t)1);
    if (!cnt) {
        ret =  1 << 13;
    }
    uint16_t index = 0;
    while (Wire1.available()) {
        read_data[index++] = Wire1.read();
    }
    return ret;
}

uint16_t BMA423::_bma423_write(uint8_t dev_addr, uint8_t reg_addr, uint8_t *write_data, uint16_t len)
{
    uint16_t ret = 0;
    char *err = NULL;
    Wire1.beginTransmission(dev_addr);
    Wire1.write(reg_addr);
    for (uint16_t i = 0; i < len; i++) {
        Wire1.write(write_data[i]);
    }
    ret =  Wire1.endTransmission();
    return ret ? 1 << 12 : ret;
}

uint16_t BMA423::bma_get_dir(direction_t *result)
{
    uint16_t rslt = BMA4_OK;
    struct bma4_accel accel;
    uint16_t absX, absY, absZ;
    rslt = bma4_read_accel_xyz(&accel, &bmd4_dev);
    if (rslt != BMA4_OK) {
        return rslt;
    }
    absX = abs(accel.x);
    absY = abs(accel.y);
    absZ = abs(accel.z);

    xAcc = accel.x;
    yAcc = accel.y;
    zAcc = accel.z;

    if ((absZ > absX) && (absZ > absY)) {
        if (accel.z > 0) {
            *result = DIRECTION_DISP_DOWN;
        } else {
            *result = DIRECTION_DISP_UP;
        }
    } else if ((absY > absX) && (absY > absZ)) {
        if (accel.y > 0) {
            *result = DIRECTION_BOTTOM_EDGE;
        } else {
            *result = DIRECTION_TOP_EDGE;
        }
    } else {
        if (accel.x < 0) {
            *result = DIRECTION_RIGHT_EDGE;
        } else {
            *result = DIRECTION_LEFT_EDGE;
        }
    }
    return rslt;
}

uint16_t BMA423::bma423_accel_enable()
{
    uint16_t rslt = BMA4_OK;
    //! 3. Configuring the accelerometer
    /* Enable the accelerometer */
    rslt = bma4_set_accel_enable(ACCEL_ENABLE, &bmd4_dev);
    if (rslt != BMA4_OK) {
        // Serial.println("bma4 enable accel fail");
        return rslt;
    }
    /* Declare an accelerometer configuration structure */
    struct bma4_accel_config accel_conf;

    /* Assign the desired settings */
    accel_conf.odr = BMA4_OUTPUT_DATA_RATE_100HZ;
    accel_conf.range = BMA4_ACCEL_RANGE_2G;
    accel_conf.bandwidth = BMA4_ACCEL_NORMAL_AVG4;
    accel_conf.perf_mode = BMA4_CONTINUOUS_MODE;

    /* Set the configuration */
    rslt = bma4_set_accel_config(&accel_conf, &bmd4_dev);
    if (rslt != BMA4_OK) {
        // Serial.println("bma4 set accel config fail");
        return rslt;
    }
    return rslt;
}

#define ENABLE_BMA_INT1
uint16_t BMA423::configure_interrupt()
{
    uint16_t rslt = BMA4_OK;
    rslt |= bma423_accel_enable();
    rslt |= bma423_step_counter_set_watermark(100, &bmd4_dev);
    rslt |= bma423_reset_step_counter(&bmd4_dev);
    rslt |= bma423_feature_enable(BMA423_STEP_CNTR, BMA4_ENABLE, &bmd4_dev);
    rslt |= bma423_feature_enable(BMA423_WAKEUP, BMA4_ENABLE, &bmd4_dev);
    rslt |= bma423_step_detector_enable(BMA4_ENABLE, &bmd4_dev);

    rslt |= bma423_map_interrupt(BMA4_INTR1_MAP, BMA423_STEP_CNTR_INT | BMA423_WAKEUP_INT, BMA4_ENABLE, &bmd4_dev);
    struct bma4_int_pin_config config ;
    config.edge_ctrl = BMA4_LEVEL_TRIGGER;
    config.lvl = BMA4_ACTIVE_HIGH;
    config.od = BMA4_PUSH_PULL;
    config.output_en = BMA4_OUTPUT_ENABLE;
    config.input_en = BMA4_INPUT_DISABLE;

    rslt |= bma4_set_int_pin_config(&config, BMA4_INTR1_MAP, &bmd4_dev);
    // Serial.printf("configure_interrupt rslt : %x\n", rslt);
    pinMode(BMA423_INT1, INPUT);
}