const { IntRoman } = require('./index')
const equal = require('assert').deepEqual

describe('Passing in 1', () => {
    it('What is it?', () => {
        equal(IntRoman(1), "I")
    })
})

describe('passing in 2', () => {
    it('What is it?', () => {
        equal(IntRoman(2), "II")
    })
})

describe('passing in 3', () => {
    it('What is it?', () => {
        equal(IntRoman(3), "III")
    })
})

describe('passing in 4', () => {
    it('What is it?', () => {
        equal(IntRoman(4), "IV")
    })
})

describe('passing in 5', () => {
    it('What is it?', () => {
        equal(IntRoman(5), "V")
    })
})