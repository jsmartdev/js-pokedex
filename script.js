
const clearDiv = (div) => {
  while(div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

const getPokemon = () => {

  const pokemon = document.getElementById('pokemon-input');
  const pokemonValue = pokemon.value;

  if(!pokemonValue) {
    alert('Please enter a city!');
    return;
  }
  
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`

  fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
      displayPokemon(data);
    })
    .catch(err => {
      console.error('Error fetching current weather data:', err)
      alert('Error fetching current weather data! Please try again!')
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
    const pokemonName = data.name;
    const nameParagraph =  document.createElement('p');
    nameParagraph.textContent = `${pokemonName}`;
    pokemonInfo.appendChild(nameParagraph);
  }
}