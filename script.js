
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
      console.log(data);
    })
    .catch(err => {
      console.error('Error fetching current weather data:', err)
      alert('Error fetching current weather data! Please try again!')
    });

}