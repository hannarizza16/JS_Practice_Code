// Fetch API Key from config.json
const fetchAPIKey = async () => {
    try {
        const response = await fetch('config.json');
        if (!response.ok) throw new Error(`HTTPS error! Status: ${response.status}`);
        const config = await response.json();
        return config.API_KEY;
    } catch (error) {
        console.error("Error fetching API Key:", error);
        alert("Failed to fetch API Key");
        return null;
    }
};

// Select elements
const inputDish = document.querySelector('#ingredient-input-box');
const generatebtn = document.querySelector('#generate-recipe');
const recipeContent = document.querySelector('.recipe-content');
const chatBotCircle = document.querySelector('.chatBotCircle');
const chatBotBox = document.querySelector(".chatBotBox");
const chatBotUser = document.querySelector(".user-text-input"); // input box
const chatBotUserInputMsg = document.querySelector(".user-input-msg"); // user msg

chatBotCircle.addEventListener("click", () => {
    chatBotBox.classList.toggle("active");
});

inputDish.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateRecipe();
    }
});

// Generate recipe function
const generateRecipe = async () => {
    let inputValue = inputDish.value.trim();
    
    if (inputValue === "") {
        alert("⚠️ Please enter a dish before generating a recipe.");
        return;
    }

    recipeContent.innerHTML = "Please wait...";
    try {
        const API_KEY = await fetchAPIKey();

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
        
        // Validate if the input is a dish
        const isValidDish = await validateDish(url, inputValue);
        
        if (!isValidDish) {
            recipeContent.innerHTML = `<strong>"${inputValue}"</strong> doesn't look like a food! Try another dish.`;
            return;
        }

        // Fetch and display the recipe
        await fetchRecipe(url, inputValue);
    } catch (error) {
        console.error("Error generating recipe:", error);
        recipeContent.innerHTML = "❌ Error generating recipe.bb Please try again.";
    }
};

// Validate if the input is a dish
const validateDish = async (url, dish) => {
    try {
        const validationRequestBody = {
            contents: [{ parts: [{ text: `Is "${dish}" a food or dish? Reply with just "yes" or "no".`}]}]
        };

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(validationRequestBody)
        });

        const data = await response.json();
        console.log("Validation Response:", data); // Debugging log

        // Extract AI response safely
        const aiResponse = data.candidates[0].content.parts[0].text.toLowerCase().trim();

        // console.log("AI Response:", aiResponse); // Debugging log

        return aiResponse === "yes"; // Returns true if AI confirms it's food
    } catch (error) {
        console.error("Error validating dish:", error);
        return false;
    }
};

// Fetch the recipe
const fetchRecipe = async (url, dish) => {
    try {
        const recipeRequestBody = {
            contents: [{ parts: [{ text: `Give me a simple step-by-step recipe for ${dish}. Include ingredients, instructions, and servings.` }] }]
        };

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeRequestBody)
        });

        const data = await response.json();
        if (data.candidates && data.candidates.length > 0) {
            const aiResponse = data.candidates[0].content.parts[0].text;  // Extract AI-generated text

            recipeContent.innerHTML = `<strong>${dish} Recipe:</strong><br><br>` + aiResponse.replace(/\n/g, "<br>");
        }    
    
    } catch (error) {
        console.error("Error fetching recipe:", error);
        recipeContent.innerHTML = "❌ Error fetching recipe.aa Please try again.";
    }
};
