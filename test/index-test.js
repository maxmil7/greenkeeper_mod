
const test = require('tape');
const version = require('../index.js');

test('version test', function (t) {
    t.plan(1);
    t.equal(version, require('../package.json').version, 'should expose version');
});