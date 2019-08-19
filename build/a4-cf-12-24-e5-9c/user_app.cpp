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
#include "pcf8563.h"
#include <WiFiMulti.h>
#include "DHTesp.h"
#include "KBEvent.h"

PCF8563_Class rtc;
  int _year, _month, _day;
  int _hour, _minute, _secound;
WiFiMulti wifimulti;
  bool wifiSync = true;
DHTesp DhtSensor1;
KBEvent kbevt;
unsigned long _prevMillis = 0;
    unsigned long _curMillis = 0;
    const int freq = 5000;
    const int channel = 5;
    const int resolution = 8;
    bool blinkState = false;

void updateDateTime() {
    String formattedDate = rtc.formatDateTime(PCF_TIMEFORMAT_YYYY_MM_DD_H_M_S);
    int splitSlash = formattedDate.indexOf("/");
    int splitColon1= formattedDate.indexOf(":");
    int splitColon2= formattedDate.indexOf(":", splitSlash+4);
    int splitHyphen1= formattedDate.indexOf("-");
    int splitHyphen2= formattedDate.indexOf("-", splitHyphen1+2);

    _day = formattedDate.substring(splitHyphen2+1, splitSlash).toInt();
    _month = formattedDate.substring(splitHyphen1+1, splitColon2).toInt();
    _year = formattedDate.substring(0, splitHyphen1).toInt();
    _hour = formattedDate.substring(splitSlash+1, splitColon1).toInt();
    _minute = formattedDate.substring(splitSlash+4, splitColon2).toInt();
    _secound = formattedDate.substring(splitColon2+1, formattedDate.length()).toInt();
  }
void blinkWithoutDelay() {
      _curMillis = millis();
      if (_curMillis - _prevMillis >= 250) {
        _prevMillis = _curMillis;
        if (blinkState == false) {
          blinkState = true;
          ledcWrite(channel, 255);
        } else {
          blinkState = false;
          ledcWrite(channel, 0);
        }
      }
    }

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

  ledcSetup(channel, freq, resolution);
    ledcAttachPin(MOTOR_PIN, channel);
  pinMode(USER_BUTTON,INPUT_PULLUP);
  pinMode(MOTOR_PIN,OUTPUT);

  

  

  

  
  rtc.begin(Wire1);



  
  
  wifimulti.addAP("ampere", "espertap");
  if (wifimulti.run() == WL_CONNECTED) {
    if(wifiSync){
      configTzTime("UTC-7", "pool.ntp.org");
      struct tm timeinfo;
      if (!getLocalTime(&timeinfo)) {
        Serial.println("Failed to sync time...");
      } else {
        Serial.println(&timeinfo, "SYNC PASS : %A, %B %d %Y %H:%M:%S");
        rtc.setDateTime(timeinfo.tm_year, timeinfo.tm_mon + 1, timeinfo.tm_mday, timeinfo.tm_hour-1, timeinfo.tm_min, timeinfo.tm_sec);
        WiFi.mode(WIFI_OFF);
      }
    }
  }



  
  
  DhtSensor1.setup(0,DHTesp::DHT11);
kbevt.attach("MyJob2",KBEventType::EVERY,
  [](){
      tft.fillScreen(0x0);

    tft.setTextSize(3);
    tft.setCursor(5, 5);
    tft.setTextColor(0xffff);
    tft.println(String((rtc.formatDateTime(PCF_TIMEFORMAT_HM))));

  },500);

}
void loop()
{
    if ((_minute) == 5) {
    blinkWithoutDelay();
  }
  if (USER_BUTTON == 0) {
    kbevt.detach("MyJob");
  }

  updateDateTime();
}
