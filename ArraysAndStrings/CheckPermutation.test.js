const assert = require('chai').assert;

const CheckPermutation = (baseString, testString) => {
    if (baseString === "" && testString === "") return true;
    if (baseString.length !== testString.length) return false;

    const charCache = {};
    for (const c of baseString) {
        charCache[c] = charCache[c] || 0;
        charCache[c] += 1;
    }
    for (const c of testString) {
        if (!charCache[c]) return false;
        charCache[c] -= 1;
        if (charCache[c] === 0) {
            charCache[c] = undefined;
        }
    }
    return true;
};

const CreateStringToTest = (baseStr, testStr, expected) => ({baseStr, testStr, expected});

const StringsToTest = [
    CreateStringToTest("", "", true),
    CreateStringToTest("abc", "cab", true),
    CreateStringToTest("ccc", "acc", false),
    CreateStringToTest("addc", "aaaddc", false),
    CreateStringToTest("Acdertfa", "Acdertfa", true),
    CreateStringToTest("123aCDASc1", "DASc1123aC", true),
    CreateStringToTest("acdertf@#1", "@acdertf1#", true),
    CreateStringToTest("@acdertfc@#1", "tfc@#1", false)
];

StringsToTest.forEach((stringToTest) => {
    describe(`permutation test - ${stringToTest.baseStr}`, () => {
        it(`permutation test - ${stringToTest.baseStr}:${stringToTest.testStr}`, () => {
            assert.equal(CheckPermutation(stringToTest.baseStr, stringToTest.testStr), stringToTest.expected);
        });
    });
});
