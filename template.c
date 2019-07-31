#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
//#### Screen SETUP ######
#include "SPI.h"
#include <TFT_eSPI.h>
#define BACKLIGHT_CHANNEL   ((uint8_t)1)
#define TFT_BL              12
TFT_eSPI tft = TFT_eSPI();   // Invoke library
//########################
${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{

  ledcAttachPin(TFT_BL, 1);
  ledcSetup(BACKLIGHT_CHANNEL, 12000, 8);
  ledcWrite(BACKLIGHT_CHANNEL, 255);
  SPI.begin(TFT_SCLK, TFT_MISO, TFT_MOSI, -1);
  tft.init();
  tft.fillScreen(0x0);
  tft.setRotation(2);
  tft.setTextSize(1);
  tft.setSwapBytes(true);


  ${SETUP_CODE}
  ${BLOCKSETUP}

}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
