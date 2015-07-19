'use strict';
var win = window.require('nw.gui').Window.get();

exports.toggleDevTools = function() {
  
  if (win.isDevToolsOpen()) {
    win.closeDevTools();
  } else {
    win.showDevTools();
  }
};