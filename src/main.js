const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const ShadowPlay = require('./shadowPlay.js')
const CineBuddy = require('./cineBuddy.js')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 320,
        height: 300,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + '/rockey.png',
    });

    window.setMenu(null);
    window.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

let cinebuddy = new CineBuddy();
cinebuddy.connect()

ipcMain.handle('toggle', (event, args) => {
    if (args.cineBuddy) {
        if (args.recording) {
            cinebuddy.setName(args.filename);
            cinebuddy.startRecord();
        } else {
            cinebuddy.stopRecord();
        }
    }
    if (args.shadowPlay) {
        new ShadowPlay().toggle();
    }
})

ipcMain.handle('error', (event, args) => {
    return dialog.showMessageBoxSync(args);
})
