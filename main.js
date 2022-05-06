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


// Return Pokemon 1
async function masterPokemonList() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
    let data = await response.json();
    let randomNum = Math.random()
    let num = Math.floor(randomNum * 100);
    console.log(data.results[num].name);
    let pokemonName = (data.results[num].name);
    let h3 = document.querySelector('#pokemon-1-name');
    h3.innerText = pokemonName;

}



let button1 = document.querySelector('#get-pokemon-1');
button1.addEventListener("click", masterPokemonList);



// document.querySelector('#pokemon-1-name').innerText = ;

// Get pokemon button
//      - Pick random pokemon name from masterPokemonList();

// Fight button
//      - 

async function getPokemonDetails(url) {
    let response = await fetch(url)
}