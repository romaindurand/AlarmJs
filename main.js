'use strict';
window.require('nw.gui').Window.get().showDevTools();

var $ = window.require("jquery");
var utils = window.require("./utils");
var timerControls = window.require("./timerControls");
var alarm = window.require("./alarm");
var timers = [];

$(button_test).click(alarm.ring);
$(button_set).click({timers : timers}, alarm.setTimer);
$(button_settings).click(utils.toggleDevTools);
$([input_hour, input_minutes]).keydown(timerControls.handleKeyboard);

setInterval(function checkTimer(hour, minutes) {
  var currentHour = new Date().getHours();
  var currentMinutes = new Date().getMinutes();

  timers.forEach(function(timer, idx) {
    if (!timer.hasRang && currentHour == timer.hour && currentMinutes == timer.minutes) {
      timer.hasRang = true;
      alarm.ring(timer.url);
    }
  });
}, 1000);