const path = require('path');
const fs = require('fs');

let packageData = fs.readFileSync(path.resolve(__dirname, '../../package.json'));
let package_config = JSON.parse(packageData);

const fixturesSampleLocal = require('../../' + package_config.config.backstopDir + '/backstopFixtures-local.json');
var fixturesArray = JSON.parse(JSON.stringify(fixturesSampleLocal));

function fixtures(fixturesArray) {
    return fixturesArray;
}

module.exports = fixtures(fixturesArray);