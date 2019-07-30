#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "SPI.h"
#include "pins_arduino.h"
#include <Adafruit_GFX.h>
#include <Adafruit_ILI9341.h>

Adafruit_ILI9341 tft = Adafruit_ILI9341(T4_TFT_CS, T4_TFT_DC);

void setup()
{
  pinMode(T4_BUTTON1, INPUT_PULLUP);
  pinMode(T4_BUTTON2, INPUT_PULLUP);
  pinMode(T4_BUTTON3, INPUT_PULLUP);
  pinMode(T4_TFT_BL, OUTPUT);
  digitalWrite(T4_TFT_BL, HIGH);

  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(0xffff);
  tft.setTextSize(2);
  tft.setCursor(5, 35);
  tft.setTextColor(0x0);
  tft.println(String(String("WiFi Connecting ...")));
  
  WiFi.begin("YOUR_SSID", "YOUR_PASSWORD");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }

  tft.fillRect(5, 35, 300, 20, 0xffff);

  tft.setTextSize(2);
  tft.setCursor(5, 35);
  tft.setTextColor(0x0);
  tft.println(String(String("WiFi Connected ...")));

  tft.setTextSize(2);
  tft.setCursor(10, 90);
  tft.setTextColor(0x0);
  tft.println(String(((String("IP Address:") + String((WiFi.localIP().toString()))))));

  tft.setTextSize(2);
  tft.setCursor(10, 110);
  tft.setTextColor(0x0);
  tft.println(String(((String("Soft IP:") + String((WiFi.softAPIP().toString()))))));

}
void loop()
{

}
