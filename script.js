
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
    const id = element.url.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const card = document.createElement('div');
    card.classList.add('poke-card');
    const name = document.createElement('p');
    name.textContent = `${element.name.charAt(0).toUpperCase() + element.name.slice(1)}`;
    const pokemonImage = document.createElement('img');
    pokemonImage.classList.add('poke-image');
    pokemonImage.src = imageUrl;
    const pokemonInfo = document.getElementById('pokemon-info');
    card.appendChild(pokemonImage);
    card.appendChild(name);
    pokemonInfo.appendChild(card);
    
    const getStats = async () => {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        return data;
      } catch(err) {
        console.error(err);
      }
    }
    
    card.onclick = () => {
      getStats().then(data => {
        console.log(data);
      })
    }
    
    
  })
})