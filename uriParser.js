'use strict';
var _ = window.require("lodash");

exports.uriRegexMap = [{
  service: "spotify",
  pattern: /^spotify:/g
}, {
  service: "youtube",
  pattern: /youtube|(youtu\.be)/g
}];

exports.timerDefault = {
  "spotify": {
    popup : false
  },
  "youtube": {
    popup: true
  }
}

exports.getService = function(uri) {
  var uriRegex = _.find(exports.uriRegexMap, function(value) {
    return uri.match(value.pattern);
  });
  if(!uriRegex) return;
  return uriRegex.service;
};
