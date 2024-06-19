
const clearDiv = (div) => {
  while(div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

const getPokemon = () => {

  const pokemon = document.getElementById('pokemon-input');
  const pokemonValue = pokemon.value;

  if(!pokemonValue) {
    alert('Please enter a pokemon!');
    return;
  }
  
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`

  fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
      displayPokemon(data);
      console.log(data);
    })
    .catch(err => {
      console.error('Error fetching pokemon:', err)
      alert('Error fetching pokemon! Please try again!')
    });

}

const displayPokemon = (data) => {

  const pokemonInfo = document.getElementById('pokemon-info');
  const pokemonSprite = document.getElementById('pokemon-sprite');

  clearDiv(pokemonInfo);
  clearDiv(pokemonSprite);

  if (data.cod === '404') {
    const paragraph = document.createElement('p');
    paragraph.textContent = data.message;
    pokemonInfo.appendChild(paragraph);
  } else {
    const id = data.id;
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const pokemonName = data.name;
    const pokemonWeight = data.weight;
    const nameParagraph =  document.createElement('p');
    const weightParagraph = document.createElement('p');
    nameParagraph.textContent = `${pokemonName}`;
    weightParagraph.textContent = `Weight: ${pokemonWeight}`
    pokemonInfo.appendChild(nameParagraph);
    pokemonInfo.appendChild(weightParagraph);
    pokemonSprite.src = spriteUrl;
  }
}