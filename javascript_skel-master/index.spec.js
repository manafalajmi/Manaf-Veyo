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

describe('passing in 123', () => {
    it('What is it?', () => {
        equal(IntRoman(123), "CXXIII")
    })

})

describe('passing in 300', () => {
    it('What is it?', () => {
        equal(IntRoman(300), "CCC")
    })

})

describe('passing in 40', () => {
    it('What is it?', () => {
        equal(IntRoman(40), "XL")
    })

})

describe('passing in 1995', () => {
    it('What is it?', () => {
        equal(IntRoman(1995), "MCMXCV")
    })
})

describe('passing in 19', () => {
    it('What is it?', () => {
        equal(IntRoman(19), "XIX")
    })
})

describe('passing in 444', () => {
    it('What is it?', () => {
        equal(IntRoman(444), "CDXLIV")
    })
})

describe('passing in 999', () => {
    it('What is it?', () => {
        equal(IntRoman(999), "CMXCIX")
    })
})