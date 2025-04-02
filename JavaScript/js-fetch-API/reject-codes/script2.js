
// fetching API
const fetchAPIKey = async() => {
    try {
        // grabbed from the config.json
        const response = await fetch ('config.json');

        if (!response.ok) throw new Error(`HTTPS error! Status: ${response.status}`);

        const config = await response.json();

        return config.API_KEY; // this gets from the config.json


    }catch (error){
        console.error("Error fetching API Key:", error);
        alert("Failed to fetch API Key")
        return null;

    }
};

fetchAPIKey();




const inputDish = document.querySelector('#ingredient-input-box');
const generatebtn = document.querySelector('#generate-recipe');
const recipeContent = document.querySelector('.recipe-content');
const chatBotCircle = document.querySelector('.chatBotCircle');
const chatBotBox = document.querySelector(".chatBotBox");
const chatBotUser = document.querySelector(".user-text-input"); // input box
const chatBotUserInputMsg = document.querySelector(".user-input-msg"); // user msg

// condition when dealing with input box 
inputDish.addEventListener("keydown", function(event){
if (event.key === "Enter"){
    generateRecipe();
}
});



const generateRecipe = async () => {
let inputValue = inputDish.value.trim();

// error handling if the input is blank
    if (inputValue === "") {
    alert("⚠️ Please enter a dish before generating a recipe.");
    return; // Stop function execution if input is empty
}

recipeContent.innerHTML = "Please wait...";

// try catch 
try{
    // 1. fetch API
    const API_KEY = await fetchAPIKey();

    // 2nd define api url 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    
    //3rd requestbody
    const validationRequestBody = {contents:[{parts: [{text: `is ${inputValue} a food or dish? reply with just "yes" or "no".`}]}]};

    //4th fetch api and make a method POST
    const validationResponse = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(validationRequestBody)
    });

    // parse data
    const validationData = await validationResponse.json();

    // checks if validation request body contains these things
    if(validationData.candidates && validationData.candidates.length > 0){
        const aiConfirmation = validationData.candidates[0].content.parts[0].text.toLowerCase().trim();

        if(aiConfirmation === "no"){
            recipeContent.innerHTML = `<strong>"${inputValue}"</strong> this doesn't look like a food! Try entering another dish name.`;
            return;
        }else if(aiConfirmation === "yes"){
            const recipeRequestBody = {
                contents: [
                    {
                        parts: [
                            { text: `Give me a simple step-by-step recipe for ${inputValue}. Include ingredients, instructions, and servings.` }
                        ]
                    }
                ]
            };
    
            const recipeResponse = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(recipeRequestBody)
            });
    
            const recipeData = await recipeResponse.json();
            displayRecipe(recipeData, inputValue);
        }
    }

}catch(error){
    console.error("Error generating recipe:", error);
    recipeContent.innerHTML = "❌ Error generating recipe. sssPlease try again.";

    // setTimeout(() => {
    //     recipeContent.textContent = ""; 
    // }, 3000);
}
console.log(inputValue);
}

chatBotCircle.addEventListener("click", () => {
    chatBotBox.classList.toggle("active");
});