'use strict';

//
// 行列式
//

const { pow } = Math;
const Inv     = require('./inv');
const { sum } = require('./util');

class Det {
    constructor(array) {
        this.array = array;
    }

    // 计算行列式
    calc() {
        let level = this.array.length;
        let x     = 0;

        return this.array[x].map((value, y) => {
            let exp = 1;
            let seq = 0;

            for (let i = 0; i < level; i++) {
                exp *= this.array[(x + i) % level][(y + i) % level];

                seq = (seq * 10 + (y + i) % level);
            }

            return exp * pow(-1, (new Inv(seq)).calc());
        }).reduce(sum);
    }
}

module.exports = Det;
