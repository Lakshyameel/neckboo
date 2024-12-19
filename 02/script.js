// JavaScript for Q&A Interface

// Get DOM Elements
const questionBox = document.getElementById('questionBox');
const submitButton = document.getElementById('submitButton');
const resultsContainer = document.getElementById('resultsContainer');
const themeToggle = document.getElementById('themeToggle');

// Add Event Listeners
submitButton.addEventListener('click', handleSubmit);
themeToggle.addEventListener('click', toggleTheme);

// Handle Question Submission
function handleSubmit() {
    const question = questionBox.value.trim();

    if (question === '') {
        alert('Please type a question before submitting!');
        return;
    }

    // Clear the question box
    questionBox.value = '';

    // Simulate an answer (Replace this with API integration later)
    const answer = `You asked: "${question}". Here is a dummy response for your query.`;

    // Create a result card
    const resultCard = document.createElement('div');
    resultCard.textContent = answer;

    // Append the result card to the results container
    resultsContainer.appendChild(resultCard);
}

// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
}
