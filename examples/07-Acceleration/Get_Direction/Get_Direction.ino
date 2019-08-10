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
#include "motion_task.h"

QueueHandle_t g_event_queue_handle = NULL;
static EventGroupHandle_t motionEventGroup = NULL;


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

  Serial.begin(115200);
  motion_task_init();

}
void loop()
{
    tft.fillScreen(0x0);
    tft.setTextSize(2);
    tft.setCursor(10, 10);
    tft.setTextColor(0xffff);
    tft.println(String(((String("direction = ")+String((motion_handle_direction(0)))))));
    tft.setTextSize(2);
    tft.setCursor(10, 30);
    tft.setTextColor(0xffff);
    tft.println(String(((String("x = ")+String((motion_handle_direction(1)))))));
    tft.setTextSize(2);
    tft.setCursor(10, 50);
    tft.setTextColor(0xffff);
    tft.println(String(((String("y = ")+String((motion_handle_direction(2)))))));
    tft.setTextSize(2);
    tft.setCursor(10, 70);
    tft.setTextColor(0xffff);
    tft.println(String(((String("z = ")+String((motion_handle_direction(3)))))));
    delay(200); 
}
