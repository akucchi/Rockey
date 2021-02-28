const { app, BrowserWindow, ipcMain } = require('electron');
const { ShadowPlay } = require('./shadowPlay.js')
const { CineBuddy } = require('./cineBuddy.js')
const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

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
        const command = args.recording;
        if (!command) { 
            cinebuddy.setName('bajojajotemp');
            cinebuddy.startRecord();
        } else {
            cinebuddy.stopRecord();
        }
    }
    if (args.shadowPlay) {
        new ShadowPlay().toggle(); 
    }
})