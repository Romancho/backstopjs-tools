const _cliProgress = require('cli-progress');

// create new progress bar
const b1 = new _cliProgress.SingleBar({
    format: 'CLI Progress |' + _colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: {speed}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

module.exports = function () {
// initialize the bar - defining payload token "speed" with the default value "N/A"
    b1.start(200, 0, {
        speed: "N/A"
    });

// update values
    b1.increment();
    b1.update(20);

// stop the bar
    b1.stop();
};