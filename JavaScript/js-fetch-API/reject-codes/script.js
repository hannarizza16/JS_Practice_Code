

    const fetchAPIKey = async() => {
        try {
            
            const response = await fetch ('config.json');
            // console.log("Fetch response:", response); // Log response details

            if (!response.ok) throw new Error(`HTTPS error! Status: ${response.status}`);

            const config = await response.json();
            // console.log("Fetched Config:", config); // Remove this in production
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

const generateRecipe = () => {
    let inputValue = inputDish.value.trim();

        if (inputValue === "") {
        alert("⚠️ Please enter a dish before generating a recipe.");
        return; // Stop function execution if input is empty
    }

    recipeContent.innerHTML = inputValue;
    // console.log(`clicked value : ${inputValue}`);

    // inputDish.value = "";
}

    chatBotCircle.addEventListener("click", () => {
        chatBotBox.classList.toggle("active");
    } )
