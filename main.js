var $ = require("jquery");
var timers = [];
var win = require('nw.gui').Window.get();

$(button_test).click(ring);
$(button_set).click(setTimer);
$(button_settings).click(toggleDevTools);

function ring(url) {
  alarm_container.src = url || $(input_url).val();
}

function setTimer () {
  timers.push({
    hour : 6,
    minutes : 20,
    url : $(input_url).val(),
    hasRang : false
  }); 
}

setInterval(function checkTimer(hour, minutes) {
  var currentHour = new Date().getHours();
  var currentMinutes = new Date().getMinutes();

  timers.forEach(function(timer, idx){
    if(!timer.hasRang && currentHour == timer.hour && currentMinutes == timer.minutes) {
      timer.hasRang = true;
      ring(timer.url);
    }
  });
}, 1000);

function toggleDevTools() {
  if(win.isDevToolsOpen()) {
    win.closeDevTools();
  } else {
    win.showDevTools();
  }
}