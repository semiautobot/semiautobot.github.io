document.addEventListener('DOMContentLoaded', () => {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const clearButton = document.getElementById('clearButton');
    const checkButton = document.getElementById('checkButton');

    function highlightDifferences() {
        const text1Content = text1.textContent;
        const text2Content = text2.textContent;

        // Split texts into words, preserving the original text structure
        const words1 = text1Content.split(/,\s*/).map(word => word.trim()).filter(word => word);
        const words2 = text2Content.split(/,\s*/).map(word => word.trim()).filter(word => word);

        // Create sets for comparison
        const set1 = new Set(words1);
        const set2 = new Set(words2);

        // Process text1
        let newText1 = '';
        let currentWord = '';
        let inWord = false;

        for (let i = 0; i < text1Content.length; i++) {
            const char = text1Content[i];
            
            if (char === ',') {
                if (inWord) {
                    const trimmedWord = currentWord.trim();
                    if (trimmedWord && !set2.has(trimmedWord)) {
                        newText1 += `<span class="highlight">${currentWord}</span>`;
                    } else {
                        newText1 += currentWord;
                    }
                    currentWord = '';
                    inWord = false;
                }
                newText1 += char;
            } else if (char === ' ') {
                if (inWord) {
                    currentWord += char;
                } else {
                    newText1 += char;
                }
            } else {
                if (!inWord) {
                    inWord = true;
                }
                currentWord += char;
            }
        }

        // Handle the last word if exists
        if (currentWord) {
            const trimmedWord = currentWord.trim();
            if (trimmedWord && !set2.has(trimmedWord)) {
                newText1 += `<span class="highlight">${currentWord}</span>`;
            } else {
                newText1 += currentWord;
            }
        }

        // Process text2
        let newText2 = '';
        currentWord = '';
        inWord = false;

        for (let i = 0; i < text2Content.length; i++) {
            const char = text2Content[i];
            
            if (char === ',') {
                if (inWord) {
                    const trimmedWord = currentWord.trim();
                    if (trimmedWord && !set1.has(trimmedWord)) {
                        newText2 += `<span class="highlight">${currentWord}</span>`;
                    } else {
                        newText2 += currentWord;
                    }
                    currentWord = '';
                    inWord = false;
                }
                newText2 += char;
            } else if (char === ' ') {
                if (inWord) {
                    currentWord += char;
                } else {
                    newText2 += char;
                }
            } else {
                if (!inWord) {
                    inWord = true;
                }
                currentWord += char;
            }
        }

        // Handle the last word if exists
        if (currentWord) {
            const trimmedWord = currentWord.trim();
            if (trimmedWord && !set1.has(trimmedWord)) {
                newText2 += `<span class="highlight">${currentWord}</span>`;
            } else {
                newText2 += currentWord;
            }
        }

        // Update content
        text1.innerHTML = newText1;
        text2.innerHTML = newText2;
    }

    function clearAll() {
        text1.innerHTML = '';
        text2.innerHTML = '';
    }

    // Event listeners
    checkButton.addEventListener('click', highlightDifferences);
    clearButton.addEventListener('click', clearAll);
}); 