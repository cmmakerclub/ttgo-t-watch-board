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

Number Button_0;
Number Button_A;
Number Button_B;
Number Button_C;

void setup()
{
  pinMode(T4_BUTTON1, INPUT_PULLUP);
  pinMode(T4_BUTTON2, INPUT_PULLUP);
  pinMode(T4_BUTTON3, INPUT_PULLUP);
  pinMode(T4_TFT_BL, OUTPUT);
  digitalWrite(T4_TFT_BL, HIGH);

  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(0x0);

  Button_0 = 0;
  Button_A = 38;
  Button_B = 37;
  Button_C = 39;

  pinMode(Button_A, INPUT_PULLUP);
  pinMode(Button_B, INPUT_PULLUP);
  pinMode(Button_C, INPUT_PULLUP);

}
void loop()
{
  tft.setTextSize(3);
  tft.setCursor(0, 0);
  tft.setTextColor(0xffff);
  tft.println(String(((String("Button 0: ") + String(digitalRead(Button_0))))));
  tft.setTextSize(3);
  tft.setCursor(0, 30);
  tft.setTextColor(0xffff);
  tft.println(String(((String("Button A: ") + String(digitalRead(Button_A))))));
  tft.setTextSize(3);
  tft.setCursor(0, 60);
  tft.setTextColor(0xffff);
  tft.println(String(((String("Button B: ") + String(digitalRead(Button_B))))));
  tft.setTextSize(3);
  tft.setCursor(0, 90);
  tft.setTextColor(0xffff);
  tft.println(String(((String("Button C: ") + String(digitalRead(Button_C))))));
  delay(100);
  tft.fillRect(170, 0, 30, 120, 0x0);
}
