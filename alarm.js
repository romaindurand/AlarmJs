'use strict';
var $ = window.require("jquery");

exports.ring = function(url) {
	if (url.target) url = "";
	$("#alarm_container")[0].src = url || $("#input_url").val();
};

exports.updateTimerList = function(timers) {
	var output = "";
	timers.forEach(function(timer) {
		output += "<span class='timer_summary'>" + timer.hour + ":" + timer.minutes + "</span>";
	});
	$("#container_timer_list").html(output);
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