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

describe('passing in 6', () => {
    it('What is it?', () => {
        equal(IntRoman(6), "VI")
    })
})

describe('passing in 7', () => {
    it('What is it?', () => {
        equal(IntRoman(7), "VII")
    })
})

describe('passing in 6', () => {
    it('What is it?', () => {
        equal(IntRoman(6), "VI")
    })
})

describe('passing in 8', () => {
    it('What is it?', () => {
        equal(IntRoman(8), "VIII")
    })
})

describe('passing in 9', () => {
    it('What is it?', () => {
        equal(IntRoman(9), "IX")
    })
})

describe('passing in 10', () => {
    it('What is it?', () => {
        equal(IntRoman(10), "X")
    })
})