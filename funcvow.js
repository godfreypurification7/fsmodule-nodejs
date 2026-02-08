const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "I scream, you scream, we all scream for ice cream.",
    "Peter Piper picked a peck of pickled peppers.",
    "The rain in Spain stays mainly in the plain.",
    "A big black bug bit a big black bear.",
    "Red lorry, yellow lorry.",
    "Unique New York.",
    "Eleven benevolent elephants."
];

const vowels = "aeiouAEIOU";

function countVowels(sentence) {
    let count = 0;
    let foundVowels = [];

    for (let char of sentence) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
            count++;
        }
    }

    return {
        sentence,
        vowelCount: count,
        foundVowels: foundVowels
    };
}

function countVowelsInSentences(sentences) {
    return sentences.map(sentence => {
        const result = countVowels(sentence); // avoid calling twice
        return result;
    });
}

countVowelsInSentences(sentences).forEach(
    ({ sentence, vowelCount, foundVowels }) => {
        console.log(
            `"${sentence}" has ${vowelCount} vowels: ${foundVowels.join(' ')}`
        );
    }
);
