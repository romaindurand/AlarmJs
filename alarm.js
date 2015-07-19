'use strict';
var $ = window.require("jquery");
var uriParser = require("./uriParser");
var _ = require("lodash");

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
  var uri = $("#input_url").val();
  var serviceDefault = uriParser.timerDefault[uriParser.getService(uri)];
  var timer = _.extend({
    hour: +$("#input_hour").val(),
    minutes: +$("#input_minutes").val(),
    url: uri,
    hasRang: false
  }, serviceDefault);
  event.data.timers.push(timer);
  exports.updateTimerList(event.data.timers);
};