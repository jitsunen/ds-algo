/**
 * Algo to determine if a given string has all unique characters.
 */

const assert = require('chai').assert;

const CreateStringToTest = (str, expected) => ({str, expected});
const StringsToTest = [
    CreateStringToTest("", true),
    CreateStringToTest("abc", true),
    CreateStringToTest("ccc", false),
    CreateStringToTest("addc", false),
    CreateStringToTest("acdertfca", false),
    CreateStringToTest("Acdertfa", true),
    CreateStringToTest("123aCDASc1", false),
    CreateStringToTest("acdertf@#1", true),
    CreateStringToTest("@acdertfc@#1", false)
];

StringsToTest.forEach((stringToTest) => {
    it(`naive unique chars test - ${stringToTest.str}`,  () => {
        assert.equal(stringToTest.expected, HasUniqueCharsNaive(stringToTest.str));
    });
    it(`no additional space unique chars test - ${stringToTest.str}`,  () => {
        assert.equal(stringToTest.expected, HasUniqueCharsNoAdditionalSpace(stringToTest.str));
    });
});

const HasUniqueCharsNaive = (stringToCheck) => {
    const charCache = {};
    for (const c of stringToCheck) {
        if (charCache[c]) return false;
        charCache[c] = 1;
    }
    return true;
};

const HasUniqueCharsNoAdditionalSpace = (stringToCheck) => {
    for (let index = 0 ; index < stringToCheck.length - 1; index++){
        const charToCheck = stringToCheck[index];
        for(let secondIndex = index + 1; secondIndex < stringToCheck.length; secondIndex++){
            if( charToCheck === stringToCheck[secondIndex]) return false;
        }
    }
    return true;
};
