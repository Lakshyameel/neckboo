// DOM Elements
const queryInput = document.getElementById('queryInput');
const submitQuery = document.getElementById('submitQuery');
const responseOutput = document.getElementById('responseOutput');
const loadHistory = document.getElementById('loadHistory');
const historyOutput = document.getElementById('historyOutput');

// Submit query
submitQuery.addEventListener('click', () => {
    const userQuery = queryInput.value.trim();

    if (userQuery === '') {
        alert('Please enter a query.');
        return;
    }

    fetch('/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_query: userQuery })
    })
        .then(response => response.json())
        .then(data => {
            responseOutput.textContent = `Chatbot: ${data.chatbot_response}`;
            queryInput.value = '';
        })
        .catch(error => console.error('Error:', error));
});

// Load chat history
loadHistory.addEventListener('click', () => {
    fetch('/history')
        .then(response => response.json())
        .then(data => {
            historyOutput.innerHTML = '';
            data.forEach(([query, response]) => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `<p><strong>You:</strong> ${query}</p><p><strong>Bot:</strong> ${response}</p>`;
                historyOutput.appendChild(historyItem);
            });
        })
        .catch(error => console.error('Error:', error));
});
