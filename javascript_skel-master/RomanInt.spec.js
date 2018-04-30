const { RomanInt } = require('./RomanInt')
const equal = require('assert').deepEqual

describe('passing in 1', () => {
    it('What is it?', () => {
        equal(RomanInt("I"), 1)
    })
})

describe('passing in 2', () => {
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
describe('passing in 6', () => {
    it('What is it?', () => {
        equal(RomanInt("VI"), 6)
    })
})
describe('passing in 7', () => {
    it('What is it?', () => {
        equal(RomanInt("VII"), 7)
    })
})
describe('passing in 8', () => {
    it('What is it?', () => {
        equal(RomanInt("VIII"), 8)
    })
})
describe('passing in 9', () => {
    it('What is it?', () => {
        equal(RomanInt("IX"), 9)
    })
})
describe('passing in 10', () => {
    it('What is it?', () => {
        equal(RomanInt("X"), 10)
    })
})

describe('passing in 90', () => {
    it('What is it?', () => {
        equal(RomanInt("XL"), 40)
    })
})

describe('passing in 90', () => {
    it('What is it?', () => {
        equal(RomanInt("XC"), 90)
    })
})

describe('passing in 400', () => {
    it('What is it?', () => {
        equal(RomanInt("CD"), 400)
    })
})
describe('passing in 900', () => {
    it('What is it?', () => {
        equal(RomanInt("CM"), 900)
    })
})
describe('passing in IC', () => {
    it('What is it?', () => {
        equal(RomanInt("IC"), "invalid string")
    })
})

describe('passing in 20', () => {
    it('What is it?', () => {
        equal(RomanInt(20), "not string")
    })
})
describe('passing in IC', () => {
    it('What is it?', () => {
        equal(RomanInt("ix"), 9)
    })
})
describe('passing in IC', () => {
    it('What is it?', () => {
        equal(RomanInt("MCMXCV"), 1995)
    })
})


describe('passing in 1888', () => {
    it('What is it?', () => {
        equal(RomanInt("MDCCCLXXXVIII"), 1888)
    })
})

describe('passing in 1987', () => {
    it('What is it?', () => {
        equal(RomanInt("MCMLXXXVII"), 1987)
    })
})
describe('passing in 2765', () => {
    it('What is it?', () => {
        equal(RomanInt("MMDCCLXV"), 2765)
    })
})
describe('passing in 3999', () => {
    it('What is it?', () => {
        equal(RomanInt("MMMCMXCIXt"), "not in alphabet")
    })
})