module.exports = {
  name: "Real Time Clock",
  color: "240",
  icon: "/static/icons/icons8_Story_Time_96px.png",
  blocks: [
     'pcf8563_rtc_begin',
     'pcf8563_rtc_set_datetime',
     'pcf8563_rtc_set_datetime_wifi',
     'pcf8563_rtc_datetime',
     'pcf8563_rtc_get_day',
     'pcf8563_rtc_get_month',
     'pcf8563_rtc_get_year',
     'pcf8563_rtc_get_hour',
     'pcf8563_rtc_get_minute',
     'pcf8563_rtc_get_secound'
  ]
};
