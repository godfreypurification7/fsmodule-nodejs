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

// async version of countVowels
async function countVowels(sentence) {
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
        foundVowels
    };
}

// async version for all sentences
async function countVowelsInSentences(sentences) {
    const promises = sentences.map(sentence => countVowels(sentence));
    return await Promise.all(promises);
}

// main async runner
async function main() {
    const results = await countVowelsInSentences(sentences);

    results.forEach(({ sentence, vowelCount, foundVowels }) => {
        console.log(
            `"${sentence}" has ${vowelCount} vowels: ${foundVowels.join(" ")}`
        );
    });
}

// run it
main();
