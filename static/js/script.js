let startTime, endTime, sampleText;
const sampleTextDiv = document.getElementById('sample-text');
const inputArea = document.getElementById('input-area');
const startBtn = document.getElementById('start-btn');
const newTextBtn = document.getElementById('new-text-btn');
const resultsDiv = document.getElementById('results');

function loadNewText() {
    fetch('/get-text')
        .then(response => response.json())
        .then(data => {
            sampleText = data.text;
            sampleTextDiv.textContent = sampleText;
            inputArea.value = '';
            inputArea.disabled = false;
            inputArea.focus();
            startTime = new Date();
            startBtn.disabled = true;
            newTextBtn.disabled = true;
            resultsDiv.textContent = '';
        });
}

startBtn.addEventListener('click', loadNewText);
newTextBtn.addEventListener('click', loadNewText);

inputArea.addEventListener('input', () => {
    if (inputArea.value === sampleText) {
        endTime = new Date();
        const timeDiff = (endTime - startTime) / 1000; // in seconds
        const words = sampleText.trim().split(/\s+/).length;
        const wpm = Math.round((words / timeDiff) * 60);
        resultsDiv.textContent = `Time: ${timeDiff.toFixed(1)} seconds | Speed: ${wpm} WPM`;
        inputArea.disabled = true;
        startBtn.disabled = false;
        newTextBtn.disabled = false;
    }
    
    // Check for errors
    const currentInput = inputArea.value;
    if (sampleText.startsWith(currentInput)) {
        inputArea.classList.remove('error');
    } else {
        inputArea.classList.add('error');
    }
});
