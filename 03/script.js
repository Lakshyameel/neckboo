// DOM Elements
const marketAnalysisButton = document.getElementById('marketAnalysisButton');
const marketAnalysisResults = document.getElementById('marketAnalysisResults');

const fundingSuggestionsButton = document.getElementById('fundingSuggestionsButton');
const fundingSuggestionsResults = document.getElementById('fundingSuggestionsResults');

const regionalGrowthButton = document.getElementById('regionalGrowthButton');
const regionInput = document.getElementById('regionInput');
const regionalGrowthResults = document.getElementById('regionalGrowthResults');

// Sample Data
const sampleMarketAnalysis = [
    "The retail market is projected to grow by 8% annually.",
    "E-commerce demand has increased by 25% in urban areas.",
    "Emerging trends include sustainable products and subscription models."
];

const sampleFundingSuggestions = [
    "Crowdfunding platforms like Kickstarter and Indiegogo.",
    "Apply for small business grants from local government programs.",
    "Seek angel investors focused on tech startups."
];

const sampleRegionalGrowthData = {
    "New York": "Growth in the tech sector is 12%, with a focus on AI and fintech.",
    "California": "Renewable energy projects are driving 18% growth in the green economy.",
    "Texas": "Real estate and oil industries are leading a 9% economic expansion."
};

// Event Listeners
marketAnalysisButton.addEventListener('click', generateMarketAnalysis);
fundingSuggestionsButton.addEventListener('click', generateFundingSuggestions);
regionalGrowthButton.addEventListener('click', analyzeRegionalGrowth);

// Generate Market Analysis
function generateMarketAnalysis() {
    marketAnalysisResults.innerHTML = sampleMarketAnalysis
        .map((point) => `<p>${point}</p>`)
        .join('');
    marketAnalysisResults.style.display = 'block';
}

// Generate Funding Suggestions
function generateFundingSuggestions() {
    fundingSuggestionsResults.innerHTML = sampleFundingSuggestions
        .map((suggestion) => `<p>${suggestion}</p>`)
        .join('');
    fundingSuggestionsResults.style.display = 'block';
}

// Analyze Regional Growth
function analyzeRegionalGrowth() {
    const region = regionInput.value.trim();
    const growthData = sampleRegionalGrowthData[region] || "No data available for the entered region.";
    
    regionalGrowthResults.innerHTML = `<p>${growthData}</p>`;
    regionalGrowthResults.style.display = 'block';
}
