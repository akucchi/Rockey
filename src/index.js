import CineBuddy from './cineBuddy.js';
import ShadowPlay from './shadowPlay.js';

let cinebuddy = new CineBuddy();

cinebuddy.connect()
    .then(() => cinebuddy.setName(process.argv[3]))
    .then(() => {
        if (process.argv[2] === 'record') {
            cinebuddy.startRecord()
        } else if (process.argv[2] === 'stop') {
            cinebuddy.stopRecord()
        } else {
            console.error('Error: unknown command');
        }
    })
    .then(() => new ShadowPlay().toggle())
    .then(() => process.exit());
