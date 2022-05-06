// HACKATHON

// HTML
// - Boilerplate
// - H1
// - Pikachu gif/image
// - Div player 1
//      - Returned pokemon image
//      - Pokemon name
// - Div player 2
//      - Returned pokemon image
//      - Pokemon name
// - Get Pokemon Button
// - Fight button
// - Pokemon trainer score box



// CSS
// - Yellow background
// - Positioning
//      - Title, images, divs, scorebox



// JS
// - Get pokemon button
//      - Button event listener for 2x API fetch
//      - Return 2 random pokemon

// - Fight button
//      - Pick random move from JSON data for each
//      - 


// Return Pokemon & display names
async function pokemon1() {
    // Get full list of pokemon
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
    let data = await response.json();
    // Pick random number
    let randomNum1 = Math.random();
    let randomNum2 = Math.random();
    let num1 = Math.floor(randomNum1 * 100);
    let num2 = Math.floor(randomNum2 * 100);
    // Use number to pick random pokemon
    let pokemonName1 = (data.results[num1].name);
    let pokemonName2 = (data.results[num2].name);
    // Set h3 as pokemon name
    let firsth3 = document.querySelector('#pokemon-1-name');
    let secondh3 = document.querySelector('#pokemon-2-name');
    firsth3.innerText = pokemonName1;
    secondh3.innerText = pokemonName2;
}

// Click button to return pokemon
let button1 = document.querySelector('#get-pokemon-1');
button1.addEventListener("click", pokemon1);

// If same pokemon returned return different ones??



// Fight button
//      - 