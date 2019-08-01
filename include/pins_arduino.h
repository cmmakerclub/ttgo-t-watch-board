#ifndef Pins_Arduino_h
#define Pins_Arduino_h

#include <stdint.h>

#define EXTERNAL_NUM_INTERRUPTS 16
#define NUM_DIGITAL_PINS        40
#define NUM_ANALOG_INPUTS       16

#define analogInputToDigitalPin(p)  (((p)<20)?(esp32_adc2gpio[(p)]):-1)
#define digitalPinToInterrupt(p)    (((p)<40)?(p):-1)
#define digitalPinHasPWM(p)         (p < 34)

static const uint8_t TXD0 = 1;
static const uint8_t RXD0 = 3;

static const uint8_t TFT_SCLK = 18;
static const uint8_t TFT_RST = -1;
static const uint8_t TFT_MOSI = 19;
static const uint8_t TFT_MISO = -1;
static const uint8_t TFT_CS = 5;
static const uint8_t TFT_DC = 27;
static const uint8_t TFT_BL = 12;

static const uint8_t SD_SCLK = 14;
static const uint8_t SD_MOSI = 15;
static const uint8_t SD_MISO = 2;
static const uint8_t SD_SS = 13;

static const uint8_t USER_BUTTON = 36;

static const uint8_t TOUCH_SDA = 23;
static const uint8_t TOUCH_SCL = 32;

static const uint8_t SENSOR_SDA = 21;
static const uint8_t SENSOR_SCL = 22;

static const uint8_t UART_TX = 33;
static const uint8_t UART_RX = 34;

static const uint8_t RTC_INT = 37;
static const uint8_t TOUCH_INT = 38;
static const uint8_t AXP202_INT = 35;
static const uint8_t BMA423_INT1 = 39;
static const uint8_t BMA423_INT2 = 0;

#endif /* Pins_Arduino_h */