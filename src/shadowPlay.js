import fs from 'fs';
import { spawn } from 'child_process';

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
        const __dirname = fs.realpathSync('.');
        this.script = __dirname + '\\src\\bajojajo.ahk';
    }

    toggle() {
        return runCommand('C:\\Program Files\\AutoHotkey\\AutoHotkey.exe', [this.script]);
    }
}

export default ShadowPlay;
