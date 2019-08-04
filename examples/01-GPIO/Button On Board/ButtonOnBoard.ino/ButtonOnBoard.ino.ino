#include <Arduino.h>
#include <pins_arduino.h>
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

Number Button_36;


void setup()
{

  ledcAttachPin(TFT_BL, 1);
  ledcSetup(BACKLIGHT_CHANNEL, 12000, 8);
  ledcWrite(BACKLIGHT_CHANNEL, 255);
  SPI.begin(TFT_SCLK, TFT_MISO, TFT_MOSI, -1);
  tft.init();
  tft.fillScreen(0xFFFF);
  tft.setRotation(0);
  tft.setTextSize(1);
  tft.setSwapBytes(true);

  tft.setRotation(0);
  tft.fillScreen(0x0);
  Button_36 = 36;
  pinMode(Button_36, INPUT_PULLUP);

}
void loop()
{
  if (digitalRead(Button_36) == 0) {
    tft.setTextSize(3);
    tft.setCursor(0, 0);
    tft.setTextColor(0xffff);
    tft.println(String(String("Button: Press")));
    tft.fillRect(86, 86, 70, 70, 0xffff);
    tft.fillCircle(120, 120, 20, 0xf800);
  } else {
    tft.setTextSize(3);
    tft.setCursor(0, 0);
    tft.setTextColor(0xffff);
    tft.println(String(String("Button: Pull")));
    tft.fillRect(86, 86, 70, 70, 0xffff);
    tft.fillCircle(120, 120, 20, 0x0);
  }
  tft.setTextSize(2);
  tft.setCursor(0, 30);
  tft.setTextColor(0xffff);
  tft.println(String(((String("Button logic : ") + String(digitalRead(Button_36))))));
  delay(200);
  tft.fillScreen(0x0);
}
