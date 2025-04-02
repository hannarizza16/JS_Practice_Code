// async function validateAndFetchRecipe(inputValue) {
//     if (!inputValue.trim()) {
//         alert("❌ Please enter a food name.");
//         return;
//     }

//     try {
//         const API_KEY = "your-api-key-here"; // Replace with your actual API key
//         const url = https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY};

//         // Step 1: Ask AI if the input is a food-related item
//         const validationRequestBody = {
//             contents: [
//                 {
//                     parts: [
//                         { text: Is "${inputValue}" a food or dish? Reply with just "yes" or "no". }
//                     ]
//                 }
//             ]
//         };

//         const validationResponse = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(validationRequestBody)
//         });

//         const validationData = await validationResponse.json();
//         const aiValidation = validationData?.candidates?.[0]?.content?.parts?.[0]?.text?.toLowerCase().trim();

//         if (aiValidation !== "yes") {
//             alert("⚠️ That doesn’t look like a food! Try entering a dish name.");
//             return;
//         }

//         // Step 2: If AI confirms, fetch the recipe
//         const recipeRequestBody = {
//             contents: [
//                 {
//                     parts: [
//                         { text: Give me a simple step-by-step recipe for ${inputValue}. Include ingredients, instructions, and servings. }
//                     ]
//                 }
//             ]
//         };

//         const recipeResponse = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(recipeRequestBody)
//         });

//         const recipeData = await recipeResponse.json();
//         displayRecipe(recipeData, inputValue);
//     } catch (error) {
//         console.error("Error fetching recipe:", error);
//     }