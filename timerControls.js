'use strict';
var $ = window.require("jquery");

exports.setInputVal = function(input, val) {
  var checkedVal = exports.checkInputVal(input, val);
  if (checkedVal < 10) checkedVal = "0" + checkedVal;
  $(input).val(checkedVal);
};

exports.handleKeyboard = function(e) {
  var val = +$(e.target).val();
  var input = e.target;
  switch (e.keyCode) {
    case 38: //up
      e.preventDefault();
      val++;
      break;

    case 40: //up
      e.preventDefault();
      val--;
      break;
  }
  exports.setInputVal(input, val);
};

exports.checkInputVal = function(input, val) {
  if (val < 0) {
    return (input.id === "input_hour") ? 23 : 59;
  }

  if (val > 23 && input.id === "input_hour") return 0;
  if (val > 59 && input.id === "input_minutes") return 0;

  return val;
};