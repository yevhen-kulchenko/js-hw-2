const findLongestWord = function (string) {
    const splitWords = string.split(" ");
    let longestWord = splitWords[0];

    for (let i = 1; i < splitWords.length; i += 1) {
        if (splitWords[i].length > longestWord.length) {
            longestWord = splitWords[i];
        }
    }

    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // ("jumped");

console.log(findLongestWord("Google do a roll")); // ("Google");

console.log(findLongestWord("May the force be with you")); // ("force");
