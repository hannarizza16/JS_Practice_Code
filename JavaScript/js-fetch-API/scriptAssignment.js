// part 1 and part 2 combined
async function fetchRandomJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');

        const joke = await response.json();

        document.querySelector('#question').textContent = `Question: ${joke.setup}`;
        // const question = document.querySelector('#question');
        // question.textContent = `Question: ${joke.setup}`;
        document.querySelector('#punchLine').textContent = `Answer: ${joke.punchline}`;


    } catch (error) {
        console.error(error);
        throw new Error(`Error fetching the joke: ${error}`);
    }
}

fetchRandomJoke();