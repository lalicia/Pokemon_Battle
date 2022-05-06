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
    moveArray1 = [];
    moveArray2 = [];
    document.querySelector('#pokemon-1-move').innerText = " ";
    document.querySelector('#pokemon-2-move').innerText = " ";
    document.querySelector('#pokemon-1-points').innerText = " ";
    document.querySelector('#pokemon-2-points').innerText = " ";
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
    pokemonName1 = pokemonName1.toUpperCase();
    let pokemonName2 = (data.results[num2].name);
    pokemonName2 = pokemonName2.toUpperCase();

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
let moveArray1 = [];
let moveArray2 = [];
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
    let num1 = Math.floor(randomNum1 * moveSet.length - 1);
    // Use number to pick random move
    let pokemonMove1 = (data.moves[num1].move.name);
    // Return sprite to image
    let pokemonSprite = data.sprites.front_default;
    let pokemonImage = document.querySelector("#pokemon-1-image");
    pokemonImage.setAttribute("src", pokemonSprite);
    pokemonMove1 = pokemonMove1.toUpperCase();
    moveArray1.push(pokemonMove1);
}

async function fightMove2(pokeURL2) {
    // fetch info for pokemon selected by button
    let response = await fetch(pokeURL2);
    let data = await response.json();
    console.log(data);
    // selects the moves from the data and picks a random number
    let moveSet = data.moves;
    let randomNum1 = Math.random();
    let num1 = Math.floor(randomNum1 * moveSet.length - 1);
    // Use number to pick random move
    let pokemonMove2 = (data.moves[num1].move.name);
    // Return sprite to image
    let pokemonSprite = data.sprites.front_default;
    let pokemonImage = document.querySelector("#pokemon-2-image");
    pokemonImage.setAttribute("src", pokemonSprite);
    pokemonMove2 = pokemonMove2.toUpperCase();
    moveArray2.push(pokemonMove2);
}


// Create function which is called in "Fight" button click
//  - Create fight button
//  - Create inline function with event listener
//  - Create element to display attack points

document.querySelector('#fight-button').addEventListener("click", function () {
    let pokemonMoveFirst = document.querySelector('#pokemon-1-move');
    let pokemonMoveSecond = document.querySelector('#pokemon-2-move');
    pokemonMoveFirst.innerText = `Attack Type: ${moveArray1}`;
    pokemonMoveSecond.innerText = `Attack Type: ${moveArray2}`;
    setTimeout(function () {
        // Target pokemon points h4
        let pokemonPoints1 = document.querySelector('#pokemon-1-points');
        let pokemonPoints2 = document.querySelector('#pokemon-2-points');
        // Math.random * 100
        let randomNum1 = Math.random();
        let randomNum2 = Math.random();
        let randomPoints1 = Math.floor(randomNum1 * 100);
        let randomPoints2 = Math.floor(randomNum2 * 100);
        // Set innerText "attack points:" + random num
        pokemonPoints1.innerText = `Attack Points: ${randomPoints1}`;
        pokemonPoints2.innerText = `Attack Points: ${randomPoints2}`;
        let pointsArray = [];
        pointsArray.push(randomPoints1);
        pointsArray.push(randomPoints2);
        // Add timeout
        setTimeout(function () {
            if (randomPoints1 > randomPoints2) {
                alert("Pokemon trainer 1 wins!");
            } else if (randomPoints1 < randomPoints2) {
                alert("Pokemon trainer 2 wins!");
            } else {
                alert("It's a draw!");
            }

        }, 750);
    }, 1500);

});