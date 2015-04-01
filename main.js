var app = require('app'),
    BrowserWindow = require('browser-window'),
    path = require('path');

var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// When atom-shell has finished starting, create the window
app.on('ready', function () {

    mainWindow = new BrowserWindow({
        width: 450,
        height: 400
    });

    mainWindow.loadUrl('file://' + (path.resolve(__dirname, 'main.html')));

    // when the window is closed
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

});
