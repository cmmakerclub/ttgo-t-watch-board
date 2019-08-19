module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);



Blockly.JavaScript['pcf8563_rtc_begin'] = function(block) {
var code =
`
#EXTINC#include "pcf8563.h"#END

#VARIABLE
PCF8563_Class rtc;
int _year, _month, _day;
int _hour, _minute, _secound;
#END

#FUNCTION
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
#END

#LOOP_EXT_CODE
updateDateTime();
#END
rtc.begin(Wire1);
\n
`
;
return code;
};

Blockly.JavaScript['pcf8563_rtc_datetime'] = function(block) {
  var dropdown_format = block.getFieldValue('FORMAT');
  var code = `rtc.formatDateTime(PCF_TIMEFORMAT_${dropdown_format})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pcf8563_rtc_set_datetime'] = function(block) {
  var dropdown_year = block.getFieldValue('YEAR');
  var dropdown_mount = block.getFieldValue('MONTH');
  var dropdown_day = block.getFieldValue('DAY');
  var dropdown_hour= block.getFieldValue('HOUR');
  var dropdown_minute= block.getFieldValue('MINUTE');
  var dropdown_secound = block.getFieldValue('SECOUND');
  var code = `rtc.setDateTime(${dropdown_year}, ${dropdown_mount}, ${dropdown_day}, ${dropdown_hour}, ${dropdown_minute}, ${dropdown_secound});`;
  return code;
};

Blockly.JavaScript['pcf8563_rtc_set_datetime_wifi'] = function(block) {
  var text_ssid = block.getFieldValue('SSID');
  var text_psk = block.getFieldValue('PSK');
  var code = 
`
#EXTINC#include <WiFiMulti.h>#END
#VARIABLE
WiFiMulti wifimulti;
bool wifiSync = true;
#END
wifimulti.addAP("${text_ssid}", "${text_psk}");
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
\n
`;
  return code;
};

Blockly.JavaScript['pcf8563_rtc_get_hour'] = function(block) {
  var code = '_hour';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pcf8563_rtc_get_minute'] = function(block) {
  var code = '_minute';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pcf8563_rtc_get_secound'] = function(block) {
  var code = '_secound';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pcf8563_rtc_get_day'] = function(block) {
  var code = '_day';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['pcf8563_rtc_get_month'] = function(block) {
  var code = '_month';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['pcf8563_rtc_get_year'] = function(block) {
  var code = '_year';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


};
