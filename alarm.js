'use strict';
var $ = window.require("jquery");

exports.ring = function(url) {
  if (url.target) url = "";
  $("#alarm_container")[0].src = url || $("#input_url").val();
};

exports.updateTimerList = function(timers) {
  var timer = timers[timers.length - 1];
  var output = "<span class='timer_summary'>" + timer.hour + ":" + timer.minutes + "</span>";
  $("#container_timer_list").append(output);
  $("#container_timer_list span").last().addClass("active");
};

exports.setTimer = function(event) {
  event.data.timers.push({
    hour: +$("#input_hour").val(),
    minutes: +$("#input_minutes").val(),
    url: $("#input_url").val(),
    hasRang: false
  });
  exports.updateTimerList(event.data.timers);
};