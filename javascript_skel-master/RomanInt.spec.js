const { RomanInt } = require('./RomanInt')
const equal = require('assert').deepEqual

describe('passing in 1', () => {
    it('What is it?', () => {
        equal(RomanInt("I"), 1)
    })
})

describe('passing in ', () => {
    it('What is it?', () => {
        equal(RomanInt("II"), 2)
    })
})
describe('passing in 3', () => {
    it('What is it?', () => {
        equal(RomanInt("III"), 3)
    })
})
describe('passing in 4', () => {
    it('What is it?', () => {
        equal(RomanInt("IV"), 4)
    })
})
describe('passing in 5', () => {
    it('What is it?', () => {
        equal(RomanInt("V"), 5)
    })
})