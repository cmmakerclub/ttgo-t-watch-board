#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

Number count;

void setup()
{
  /* setup code */

  /* block setup */
  Serial.begin(115200);
  count = 0;
}

void loop()
{
  count = count + 1;
  Serial.println(((String("Count : ") + String(count))));
  delay(1000);
}
