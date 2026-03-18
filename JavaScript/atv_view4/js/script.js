// 1
document.querySelector("#btnMensagem").addEventListener("click", function() {
  window.alert("Bem-vindo ao painel do treinador!");
});

// 2
document.querySelector("#btnAlterarTitulo").addEventListener("click", function() {
  const titulo = document.querySelector("#titulo");
  titulo.textContent = "Equipe Pokémon carregada!";
});

// 3
document.querySelector("#btnTema").addEventListener("click", function() {
  const body = document.querySelector("body");
  if (body.style.backgroundColor === "") {
    body.style.backgroundColor = "blanchedalmond";
  } else {
    body.style.backgroundColor = "";
  }
});

// 4
window.onload = function() {
    document.title = "Painel Pokémon - DOM";
};

//5
document.querySelector("#btnDestacarPrimeiro").addEventListener("click", function(){
  const primeiroPokemon = document.querySelector(".pokemon");
  primeiroPokemon.classList.add("destaque");
})

//6 Ao clicar no botão 'Remover último', remova o último item (<li>) da lista de Pokémon.
document.querySelector("#btnRemoverUltimo").addEventListener("click", function() {
  const listaPokemons = document.querySelector("#listaPokemons");
  const ultimoPokemon = listaPokemons.lastElementChild;
  if (ultimoPokemon) {
    listaPokemons.removeChild(ultimoPokemon);
  }});

//7. Quando um Pokémon da lista for clicado, altere o texto do elemento '#infoPokemon' para mostrar o nome do Pokémon clicado.
const pokemons = document.querySelectorAll(".pokemon");
pokemons.forEach(function(pokemon) {
  pokemon.addEventListener("click", function() {
    const infoPokemon = document.querySelector("#infoPokemon");
    infoPokemon.textContent = "Você selecionou: " + pokemon.textContent;
  });
});

//8 Quando um Pokémon da lista for clicado, adicione a classe 'selecionado' ao item clicado e remova essa classe dos demais.
pokemons.forEach(function(pokemon) {
  pokemon.addEventListener("click", function() {
    pokemons.forEach(function(p) {
      p.classList.remove("selecionado");
    });
    pokemon.classList.add("selecionado");
  });
});

//9 Quando um Pokémon da lista for clicado, utilize getAttribute() para ler o atributo 'data-tipo' e mostre o tipo no texto de detalhes.
pokemons.forEach(function(pokemon) {
  pokemon.addEventListener("click", function() {
    const tipo = pokemon.getAttribute("data-tipo");
    const infoPokemon = document.querySelector("#infoPokemon");
    infoPokemon.textContent = "Tipo do Pokémon: " + tipo;
  });
});

//10 Ao clicar no botão 'Adicionar Pokémon', adicione um novo item na lista utilizando os valores digitados nos campos de entrada.
  
//document.querySelector("#btnAdicionar").addEventListener("click", function() {
//  const nomeInput = document.querySelector("#inputPokemon");
//  const tipoInput = document.querySelector("#inputTipo");
//  const nome = nomeInput.value.trim();
//  const tipo = tipoInput.value.trim(); 
//  if (nome && tipo) {
//    const listaPokemons = document.querySelector("#listaPokemons");
//    const novoPokemon = document.createElement("li");
//    novoPokemon.textContent = nome;
//    novoPokemon.setAttribute("data-tipo", tipo);
//    novoPokemon.classList.add("pokemon");
//    listaPokemons.appendChild(novoPokemon);
//    nomeInput.value = "";
//   tipoInput.value = "";
//  } else {
//    window.alert("Vai dá não");
//  } });

//--------Deixar um comentando e outro ativo para mostrar as duas formas de adicionar um novo Pokémon à lista.----------------------------------

  //11 Implemente a adição do novo Pokémon utilizando o método insertAdjacentHTML().
  document.querySelector("#btnAdicionar").addEventListener("click", function() {
    const nomeInput = document.querySelector("#inputPokemon");
    const tipoInput = document.querySelector("#inputTipo");
    const nome = nomeInput.value.trim();
    const tipo = tipoInput.value.trim();
    if (nome && tipo) {
      const listaPokemons = document.querySelector("#listaPokemons");
      const novoPokemonHTML = `<li class="pokemon" data-tipo="${tipo}">${nome}</li>`;
      listaPokemons.insertAdjacentHTML("beforeend", novoPokemonHTML);
      nomeInput.value = "";
      tipoInput.value = "";
    } else {
      window.alert("Vai dá não");
    }   
  });

  //12