/**
 * Algo to determine if a given string has all unique characters.
 */

const assert = require('chai').assert;

it('naive unique chars test', function () {
    assert.isTrue(HasUniqueCharsNaive(""));
    assert.isTrue(HasUniqueCharsNaive("abc"));
    assert.isFalse(HasUniqueCharsNaive("ccc"));
    assert.isFalse(HasUniqueCharsNaive("addc"));
});

const HasUniqueCharsNaive = (stringToCheck) => {
    const charCache = {};
    for (const c of stringToCheck) {
        if (charCache[c]) return false;
        charCache[c] = 1;
    }
    return true;
};
