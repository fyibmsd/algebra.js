'use strict';

//
// 逆序数
//

const { sum } = require('./util');

class Inv {
    constructor(sequence) {
        this.sequence = String(sequence).split('');
    }

    // 计算序列的逆序数
    calc() {
        return this.sequence.map(
            (curr, index) => this.sequence.slice(++index).map(next => curr > next ? 1 : 0)
        ).map(
            row => row.length > 0 ? row.reduce(sum) : 0
        ).reduce(sum);
    }
}

module.exports = Inv;

