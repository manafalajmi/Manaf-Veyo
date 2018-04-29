const { RomanInt } = require('./RomanInt')
const equal = require('assert').deepEqual

describe('passing in', () => {
    it('What is it?', () => {
        equal(RomanInt("I"), "1")
    })
})