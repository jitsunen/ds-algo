const assert = require('chai').assert;
const Queue = require('../Lib/Queue');

const Urlify = (charArray, trueLength) => {
    const queue = new Queue();
    let index = 0;
    let numNonSpaceCharsRead = 0;
    while (numNonSpaceCharsRead < trueLength) {
        let c = charArray[index];
        if (c === ' ') {
            queue.Add('%');
            queue.Add('2');
            queue.Add('0');
        } else {
            queue.Add(c);
        }
        index++;
        if (c !== ' ') numNonSpaceCharsRead++;
    }

    if (!queue.isEmpty()) {
        let queueIndex = 0;
        while (!queue.isEmpty()) {
            charArray[queueIndex] = queue.Remove();
            queueIndex++;
        }
    }
};

const CreateStringToTest = (baseStr, trueLength, urlified) => ({baseStr, trueLength, urlified});

const StringsToTest = [
    CreateStringToTest("", 0, ""),
    CreateStringToTest("abc", 3, "abc"),
    CreateStringToTest(" abc", 3, "%20abc"),
    CreateStringToTest(" a b c", 3, "%20a%20b%20c"),
    CreateStringToTest(" a  b20c", 5, "%20a%20%20b20c")
];

StringsToTest.forEach((stringToTest) => {
    it(`urlify test - ${stringToTest.baseStr}`, () => {
        let charArray = Array.from({length: stringToTest.urlified.length}, (x, i) => stringToTest.baseStr[i] || ' ');
        Urlify(charArray, stringToTest.trueLength);
        assert.equal(charArray.join(''), stringToTest.urlified);
    });
});

module.exports = Urlify;