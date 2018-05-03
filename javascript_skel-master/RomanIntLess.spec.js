const { RomanIntLess } = require('./RomanIntLess')
const equal = require('assert').deepEqual

describe('passing in 1', () => {
    it('What is it?', () => {
        equal(RomanIntLess("I"), 1)
    })
})

describe('passing in 2', () => {
    it('What is it?', () => {
        equal(RomanIntLess("II"), 2)
    })
})
describe('passing in 3', () => {
    it('What is it?', () => {
        equal(RomanIntLess("III"), 3)
    })
})
describe('passing in 4', () => {
    it('What is it?', () => {
        equal(RomanIntLess("IV"), 4)
    })
})
describe('passing in 5', () => {
    it('What is it?', () => {
        equal(RomanIntLess("V"), 5)
    })
})
describe('passing in 6', () => {
    it('What is it?', () => {
        equal(RomanIntLess("VI"), 6)
    })
})
describe('passing in 7', () => {
    it('What is it?', () => {
        equal(RomanIntLess("VII"), 7)
    })
})
describe('passing in 8', () => {
    it('What is it?', () => {
        equal(RomanIntLess("VIII"), 8)
    })
})
describe('passing in 9', () => {
    it('What is it?', () => {
        equal(RomanIntLess("IX"), 9)
    })
})
describe('passing in 10', () => {
    it('What is it?', () => {
        equal(RomanIntLess("X"), 10)
    })
})

describe('passing in 90', () => {
    it('What is it?', () => {
        equal(RomanIntLess("XL"), 40)
    })
})

describe('passing in 90', () => {
    it('What is it?', () => {
        equal(RomanIntLess("XC"), 90)
    })
})

describe('passing in 400', () => {
    it('What is it?', () => {
        equal(RomanIntLess("CD"), 400)
    })
})
describe('passing in 900', () => {
    it('What is it?', () => {
        equal(RomanIntLess("CM"), 900)
    })
})
describe('passing in IC', () => {
    it('What is it?', () => {
        equal(RomanIntLess("IC"), "invalid string")
    })
})

describe('passing in 20', () => {
    it('What is it?', () => {
        equal(RomanIntLess(20), "not string")
    })
})
describe('passing in IC', () => {
    it('What is it?', () => {
        equal(RomanIntLess("ix"), 9)
    })
})
describe('passing in IC', () => {
    it('What is it?', () => {
        equal(RomanIntLess("MCMXCV"), 1995)
    })
})


describe('passing in 1888', () => {
    it('What is it?', () => {
        equal(RomanIntLess("MDCCCLXXXVIII"), 1888)
    })
})

describe('passing in 1987', () => {
    it('What is it?', () => {
        equal(RomanIntLess("MCMLXXXVII"), 1987)
    })
})
describe('passing in 2765', () => {
    it('What is it?', () => {
        equal(RomanIntLess("MMDCCLXV"), 2765)
    })
})
describe('passing in 3999', () => {
    it('What is it?', () => {
        equal(RomanIntLess("MMMCMXCIXt"), "not in alphabet")
    })
})