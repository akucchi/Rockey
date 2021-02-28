const WebSocket = require('ws');

const BAKKESMOD_SERVER = 'ws://127.0.0.1:9002';
const RCON_PASSWORD = 'password';

class CineBuddy {
    constructor() {
        this.client = new WebSocket(BAKKESMOD_SERVER);
    }

    connect() {
        return new Promise((resolve) => {
            this.client.on('open', () => {
                this.client.send(`rcon_password ${RCON_PASSWORD}`);
                resolve();
            });
        });
    }

    async startRecord() {
        this.client.send('cbStartRecord');
    }

    async stopRecord() {
        this.client.send('cbStopRecord');
    }

    async setName(name) {
        this.client.send(`cb_file_name ${name}`);
        this.client.send(`cb_camera_name ${name}`);
    }
}

module.exports = CineBuddy;
