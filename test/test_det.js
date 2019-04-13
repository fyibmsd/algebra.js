'use strict';

const assert = require('assert');
const Det    = require('../src/det');

describe('test det', () => {

    it('should calculate det', () => {
        let det = new Det([
            [2, 3, -4],
            [-2, 2, 1],
            [-3, 4, -2]
        ]);

        assert.strictEqual(det.level(), 3);
        assert.strictEqual(det.calc(), 15);
    });

});
