#include <Arduino.h>
#include <pins_arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Wire.h>
//#### Screen SETUP ######
#include "SPI.h"
#include <TFT_eSPI.h>
#define BACKLIGHT_CHANNEL   ((uint8_t)1)
#define TFT_BL              12
TFT_eSPI tft = TFT_eSPI();   // Invoke library
//########################
#include "CMMC_BMA423.h"

BMA423 bma;



void setup()
{
  Wire.begin(TOUCH_SDA, TOUCH_SCL);
  Wire1.begin(SENSOR_SDA, SENSOR_SCL);
  SPI.begin(TFT_SCLK, TFT_MISO, TFT_MOSI, -1); 

  ledcAttachPin(TFT_BL, 1);
  ledcSetup(BACKLIGHT_CHANNEL, 12000, 8);
  ledcWrite(BACKLIGHT_CHANNEL, 255);

  tft.init();
  tft.fillScreen(0xFFFF);
  tft.setRotation(0);
  tft.setTextSize(1);
  tft.setSwapBytes(true);

  
  bma.begin();

  pinMode(36,INPUT_PULLUP);

}
void loop()
{
    if (digitalRead(36) == 0) {
    bma.clear_stepcount();}
    tft.setTextSize(3);
    tft.setCursor(10, 10);
    tft.setTextColor(0x0);
    tft.println(String((bma.motion_stepcount())));
    delay(200);
  tft.fillScreen(0xffff);

  
}
