import CineBuddy from './cineBuddy.js';
import ShadowPlay from './shadowPlay.js';

let cinebuddy = new CineBuddy();

cinebuddy.connect()
    .then(() => {
        const command = process.argv[2];

        if (command === 'record') {
            cinebuddy.setName(process.argv[3]);
            cinebuddy.startRecord();
        } else if (command === 'stop') {
            cinebuddy.stopRecord();
        } else {
            console.error(`Error: unknown command: ${command}`);
        }
    })
    .then(() => new ShadowPlay().toggle())
    .then(() => process.exit());
