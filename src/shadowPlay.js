const fs = require('fs');
const { spawn } = require('child_process');

function runCommand(command, args, options = undefined) {
    const spawned = spawn(command, args, options);

    return new Promise((resolve) => {
        spawned.stdout.on('data', (data) => {
            console.log(data.toString());
        });

        spawned.stderr.on('data', (data) => {
            console.error(data.toString());
        });

        spawned.on('close', () => {
            resolve();
        });
    });
}

class ShadowPlay {
    constructor() {
        this.script = __dirname + '\\toggleRecord.ahk';
    }

    toggle() {
        return runCommand('C:\\Program Files\\AutoHotkey\\AutoHotkey.exe', [this.script]);
    }
}

module.exports = ShadowPlay;
