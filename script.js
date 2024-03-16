'use strict';

const apiURL = 'https://official-joke-api.appspot.com/jokes/programming/random';
const jokeBtn = document.getElementById('button');
const textArea = document.getElementById('text-area');

const jokeClass = function(setup, punchline)
{
    this.setup = setup;
    this.punchline = punchline;
}

const getJoke = async function() {
    const response = await fetch(apiURL);
    const data = await response.json();

    const joke = data[0];
    return new jokeClass(joke.setup, joke.punchline);
}

jokeBtn.addEventListener('click', () => {
    getJoke().then(joke => {
        textArea.textContent = `${joke.setup} \n\n ${joke.punchline}`
        }
    )
})