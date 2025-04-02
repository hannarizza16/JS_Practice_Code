



//this does not have a try and catch function this will crash when encountered with error
//  Load API Key from config.json
const fetchAPIKey = async() => { // created a function

    try{
        //fetch api
        const response = await fetch('config.json')

        //check if theres an error in fetching api
        if(!response.ok) throw new Error(`HTTPS error Status: ${response.status}`);

        //convert to JSON
        const config = await response.json();

        return config.API_KEY;  // fetching API_KEY in config.json

    }catch (error){
        console.error("Fetching error: ", error)
        alert("ERROR: Failed to fetch API KEY see console for details")
    }
};

fetchAPIKey();

const inputDish = document.querySelector("#ingredient-input-box");
const generateBtn = document.querySelector("#generate-recipe");
const recipeContent = document.querySelector(".recipe-content");
const chatBotCircle = document.querySelector('.chatBotCircle');
const chatBotBox = document.querySelector(".chatBotBox");
const chatBotUser = document.querySelector(".user-text-input"); // input box
const chatBotUserInputMsg = document.querySelector(".user-input-msg"); // user msg

// addEventListener when key pressed enter
inputDish.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        generateRecipe();
    }
});

// Function to generate AI-powered recipe
const generateRecipe = async() => { // function
    let inputValue = inputDish.value.trim();

    if (inputValue === "") {
        alert("⚠️ Please enter a dish before generating a recipe.");
        return;
    }
    // Display loading text while fetching data
    recipeContent.innerHTML = "Please wait...";

    // if(!inputValue.trim()){
    //     recipeContent.innerHTML = "❌ Enter a true dish name";
    //     return
    // }

    try {
        //1. fetch api key 
        const API_KEY = await fetchAPIKey();  // getting or fetching the api key first

        //2. what url to fetch
        // Define the API URL
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

        //3. request body 
        // Define request body
        const requestBody = {
    
            contents: [
                {
                    parts: [
                        { text: `Give me a simple step-by-step recipe for ${inputValue}. Include ingredients, instructions and for how many serving.` }
                    ]
                }
            ]
        }
        //4. Send request to Gemini API using fetch()
        const response = await fetch(url, {
            method: "POST",

            // this headers is to tell the server that the content it will recieve is in JSON format
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(requestBody)
        });

        //5.this is to convert the response to JSON
        // parse the response .json() to get the data
        const data = await response.json();

        // 6. check if the data has candidates and if the length is greater than 0
        
        if (data.candidates && data.candidates.length > 0) {
            const aiResponse = data.candidates[0].content.parts[0].text;  // Extract AI-generated text

            recipeContent.innerHTML = `<strong>${inputValue} Recipe:</strong><br><br>` + aiResponse.replace(/\n/g, "<br>");
        } else {
            recipeContent.innerHTML = "❌ No recipe found. Try another dish.";
        }

    } catch (error) {
        console.error("Error generating recipe:", error);
        recipeContent.innerHTML = "❌ Error generating recipe. Please try again.";
    }

    console.log(inputValue);
    // Clear input field
    // inputDish.value = "";
}


chatBotCircle.addEventListener("click", () => {
    chatBotBox.classList.toggle("active");
})
