/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freqMap = new Map();
    for (const word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    const sortedWords = Array.from(freqMap.keys()).sort((a, b) => {
        const freqA = freqMap.get(a);
        const freqB = freqMap.get(b);
        if (freqA === freqB) {
            return a.localeCompare(b); 
        }
        return freqB - freqA; 
    });

    return sortedWords.slice(0, k);
}