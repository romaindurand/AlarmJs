var $ = require("jquery");
var timers = [];
var win = require('nw.gui').Window.get();

$(button_test).click(ring);
$(button_set).click(setTimer);
$(button_settings).click(toggleDevTools);
$([input_hour, input_minutes]).keydown(handleKeyboard);

function handleKeyboard(e) {
  var val = +$(e.target).val();
  var input = e.target;
  switch(e.keyCode) {
    case 38: //up
      e.preventDefault();
      val++;
    break;

    case 40: //up
      e.preventDefault();
      val--;
    break;
  }
  setInputVal(input, val);
}

function setInputVal(input, val) {
  var checkedVal = checkInputVal(input, val);
  if(checkedVal < 10) checkedVal = "0" + checkedVal;
  $(input).val(checkedVal);
}

function checkInputVal(input, val) {
  if(val < 0) {
    return (input.id === "input_hour")? 23 : 59;
  }

  if(val > 23 && input.id === "input_hour") return 0;
  if(val > 59 && input.id === "input_minutes")  return 0;

  return val;
}

function ring(url) {
  alarm_container.src = url || $(input_url).val();
}

function setTimer() {
  timers.push({
    hour : +$(input_hour).val(),
    minutes : +$(input_minutes).val(),
    url : $(input_url).val(),
    hasRang : false
  });
  updateTimerList();
}

function updateTimerList() {
  var output = "";
  timers.forEach(function (timer) {
    output += "<span class='timer_summary'>"+ timer.hour +":"+ timer.minutes +"</span>";
  });
  $(container_timer_list).html(output);
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