'use strict';

// Includes Tint's API, and sets up the runtime bridge.
require('Common');

application.exitAfterWindowsClose = true;
application.name = 'GroupUp';

// The window
var win            = new Window(); // initially hidden.
    win.title      = 'GroupUp';
    win.width      = 1050;
    win.height     = 650;

// Center window
var screens = require('Screens');
var active  = screens.active;
win.x       = (active.bounds.width / 2) - (win.width / 2);
win.y       = (active.bounds.height / 2) - (win.height / 2);

win.visible = true;

// The webview
var webview          = new WebView();
    webview.top      = 0;
    webview.left     = webview.right
                     = webview.bottom
                     = 0;
    webview.location = 'http://app.groupme.com/';
win.appendChild(webview);

// Load mobile site if too small
// var is_mobile = false;
// win.addEventListener('resize', function () {
//   if (win.width < 600 && !is_mobile) {
//     is_mobile = true;
//     webview.location = 'http'

//   } else if (win.width > 600 && is_mobile) {
//     is_mobile = false;
//   }
// });

var setup = require('./setup')(win, webview);
    setup.createMenus();
