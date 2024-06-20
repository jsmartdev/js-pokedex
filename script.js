let allPokemon = [];

const getPokemon = () => {
  
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=200`)
    .then(response => response.json())
    .then(data => {
      const allPokemon = data.results;
      console.log(allPokemon)
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
      });
    });
}

getPokemon(allPokemon);


/*const displayPokemon = (data) => {

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
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
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
}*/

/*pokemon.forEach(element => {
  const name = element.name;
  const id = element.id;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const nameParagraph =  document.createElement('p');
  nameParagraph.textContent = `${name}`;
  pokemonInfo.appendChild(nameParagraph);
  pokemonSprite.src = imageUrl;
});*/