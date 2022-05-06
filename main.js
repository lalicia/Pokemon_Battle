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
async function getPokemon() {
    // Get full list of pokemon
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0");
    let data = await response.json();
    // Pick random number
    let randomNum1 = Math.random();
    let randomNum2 = Math.random();
    let num1 = Math.floor(randomNum1 * 100);
    let num2 = Math.floor(randomNum2 * 100);
    // Use number to pick random pokemon
    let pokemonName1 = (data.results[num1].name);
    let pokemonName2 = (data.results[num2].name);
    
    // Get indiv pokemon URLs from data
    let pokeURL1 = data.results[num1].url;
    let pokeURL2 = data.results[num2].url;

    // Set h3 as pokemon name
    let firsth3 = document.querySelector('#pokemon-1-name');
    let secondh3 = document.querySelector('#pokemon-2-name');
    firsth3.innerText = pokemonName1;
    secondh3.innerText = pokemonName2;

    // Handing in URLs to new function 
    fightMove1(pokeURL1);
    fightMove2(pokeURL2);
}
// Click button to return pokemon
let button1 = document.querySelector('#get-pokemon');
button1.addEventListener("click", getPokemon);

// If same pokemon returned return different ones??

async function fightMove1(pokeURL1) {
    // fetch info for pokemon selected by button
    let response = await fetch(pokeURL1);
    let data = await response.json();
    // selects the moves from the data and picks a random number
    let moveSet = data.moves;
    let randomNum1 = Math.random();
    let num1 = Math.floor(randomNum1 * moveSet.length-1);
    // Use number to pick random move
    let pokemonMove1 = (data.moves[num1].move.name);
    // Assign move to h4
    let h4 = document.querySelector('#pokemon-1-move');
    h4.innerText = pokemonMove1;
    // Return sprite to image
    let pokemonSprite = data.sprites.front_default;
    let pokemonImage = document.querySelector("#pokemon-1-image");
    pokemonImage.setAttribute("src", pokemonSprite);
}

async function fightMove2(pokeURL2) {
    // fetch info for pokemon selected by button
    let response = await fetch(pokeURL2);
    let data = await response.json();
    console.log(data);
    // selects the moves from the data and picks a random number
    let moveSet = data.moves;
    let randomNum1 = Math.random();
    let num1 = Math.floor(randomNum1 * moveSet.length-1);
    // Use number to pick random move
    let pokemonMove2 = (data.moves[num1].move.name);
    // Assign move to h4
    let h4 = document.querySelector('#pokemon-2-move');
    h4.innerText = pokemonMove2;
    // Return sprite to image
    let pokemonSprite = data.sprites.front_default;
    let pokemonImage = document.querySelector("#pokemon-2-image");
    pokemonImage.setAttribute("src", pokemonSprite);
}

// LOOK AT IS REFACTORING Separate Fight button
//      - access the result of getPokemon function
//      - use result to fetch data for Pokemon from API 
//      - set response to data
//      - navigate to data we want - what data do we want