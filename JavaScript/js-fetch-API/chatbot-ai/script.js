const API_KEY = "AIzaSyAoTQIc01ACqzIZh0khcSWYsmo8L3Ywq9w"; // Store securely in a backend
const chatBox = document.querySelector("#chat-box");
const userInput = document.querySelector("#user-input");
const sendBtn = document.querySelector("#send-btn");

sendBtn.addEventListener("click", async () => {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user message
    chatBox.innerHTML += `<div class="user-msg">${userMessage}</div>`;

    // Fetch AI response
    const aiResponse = await fetchRecipe(userMessage);

    // Display AI response
    chatBox.innerHTML += `<div class="ai-msg">${aiResponse}</div>`;

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    userInput.value = "";
});

const fetchRecipe = async (userMessage) => {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;
        
        const requestBody = {
            contents: [{ 
                parts: [{ text: `Give me a step-by-step recipe for ${userMessage}. Include ingredients, instructions, and servings.` }] 
            }]
        };

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        
        return data.candidates[0].content.parts[0].text.replace(/\n/g, "<br>"); // Format for display
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return "Sorry, I couldn't generate a recipe at this time.";
    }
};
