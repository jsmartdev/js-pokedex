
const getPokemon = async () => {
  
  const url = `https://pokeapi.co/api/v2/pokemon?limit=1025`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

getPokemon().then(data => {
  
  const allPokemon = data.results;
  
  allPokemon.forEach(element => {
    const card = document.createElement('div');
    const paragraph = document.createElement('p');
    const pokemonImage = document.createElement('img');
    const pokemonInfo = document.getElementById('pokemon-info');
    const id = element.url.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    paragraph.textContent = `Name: ${element.name}`;
    card.classList.add('poke-card');
    pokemonImage.classList.add('poke-image');
    pokemonImage.src = imageUrl;
    card.appendChild(pokemonImage);
    card.appendChild(paragraph);
    pokemonInfo.appendChild(card);
  })

})

getPokemon();


