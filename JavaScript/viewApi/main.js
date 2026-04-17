fetch('https://pokeapi.co/api/v2/pokemon/Scizor')
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    console.log(data.height);
    console.log(data.types[0].type.name);
  });

  fetch('https://pokeapi.co/api/v2/pokemon/68')
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    console.log(data.height);
    console.log(data.types[0].type.name);
  });

   fetch('https://pokeapi.co/api/v2/pokemon/Scizor')
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    data.abilities.forEach(item => {
      console.log(item.ability.name, item.is_hidden);
    });
  });

  fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        console.log(pokemon.name);
      });
    });

fetch('https://pokeapi.co/api/v2/type/water')
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      data.pokemon.forEach(item => {
        console.log(item.pokemon.name);
      });
    });