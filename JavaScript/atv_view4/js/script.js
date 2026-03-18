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

  //12 Após adicionar um novo Pokémon, limpe os campos do formulário.
  //Já fiz implementando o nomeInput.value = "";
  

  //13 Garanta que os novos itens adicionados à lista também possam ser clicados para atualizar a área de detalhes.
  document.querySelector("#listaPokemons").addEventListener("click", function(event) {
    if (event.target && event.target.matches("li.pokemon")) {
      const tipo = event.target.getAttribute("data-tipo");
      const infoPokemon = document.querySelector("#infoPokemon");
      infoPokemon.textContent = "Tipo do Pokémon: " + tipo;
    }
  });
  
  //14 Ao passar o mouse sobre a área de eventos, altere o texto para 'Mouse dentro da área!'. Ao sair da área, volte para 'Passe o mouse aqui'.
  const areaEventos = document.querySelector("#areaMouse");
  areaEventos.addEventListener("mouseenter", function() {
  areaEventos.textContent = "Mouse dentro da área!";
  });
  const areaEventos2 = document.querySelector("#areaMouse");
  areaEventos2.addEventListener("mouseleave", function() {
  areaEventos2.textContent = "Passe o mouse aqui";
  });

  //15 Quando qualquer tecla do teclado for pressionada, mostre no parágrafo correspondente qual tecla foi pressionada.
  document.addEventListener("keydown", function(event) {
    const infoTecla = document.querySelector("#textoTeclado");
    infoTecla.textContent = "Tecla pressionada: " + event.key;
  });

  //16 Ao clicar no botão 'Alterar título', além de mudar o texto, altere também a cor, o tamanho da fonte e o alinhamento do título.
  document.querySelector("#btnAlterarTitulo").addEventListener("click", function() {
    const titulo = document.querySelector("#titulo");
    titulo.textContent = "Equipe Pokémon carregada!"; 
    titulo.style.color = "blue";
    titulo.style.fontSize = "24px";
    titulo.style.textAlign = "center";
  });

  //17 . Utilize setAttribute() para alterar o link da Pokédex para outro endereço e modificar o texto do link.
  const linkPokedex = document.querySelector("#linkPokedex");
  linkPokedex.setAttribute("href", "https://www.pokemon.com");
  linkPokedex.textContent = "Acesse a Pokédex oficial!";



  //18 . Utilize getAttribute() para exibir no console o src da imagem, o alt da imagem e o href do link.
  document.querySelector("#linkPokedex").addEventListener("click", function() {
    const linkPokedex = document.querySelector("#linkPokedex");
    console.log("Src da imagem:", linkPokedex.getAttribute("src"));
    console.log("Alt da imagem:", linkPokedex.getAttribute("alt"));
    console.log("Href do link:", linkPokedex.getAttribute("href"));
  });

  //19 Crie dinamicamente um botão chamado 'Ocultar descrição'. Ao clicar nele, o parágrafo de descrição deve desaparecer. Se clicar novamente, ele deve reaparecer.
  const btnOcultarDescricao = document.createElement("button");
  btnOcultarDescricao.textContent = "Ocultar descrição";
  document.body.appendChild(btnOcultarDescricao);
  const descricao = document.querySelector("#descricao");
  btnOcultarDescricao.addEventListener("click", function() {
    if (descricao.style.display === "none") {
      descricao.style.display = "block";
      btnOcultarDescricao.textContent = "Ocultar descrição";
    } else {
      descricao.style.display = "none";
      btnOcultarDescricao.textContent = "Mostrar descrição";
    }
  });

  //20 Mostre no console quantos filhos existem na lista de Pokémon, qual é o primeiro elemento e qual é o último.
  const listaPokemons = document.querySelector("#listaPokemons");
  console.log("Número de filhos na lista de Pokémon:", listaPokemons.children.length);
  console.log("Primeiro elemento da lista de Pokémon:", listaPokemons.firstElementChild);
  console.log("Último elemento da lista de Pokémon:", listaPokemons.lastElementChild);

  //21 Crie um botão 'Remover selecionado'. Ao clicar nele, remova da lista o Pokémon que estiver com a classe 'selecionado'.
  const btnRemoverSelecionado = document.createElement("button");
  btnRemoverSelecionado.textContent = "Remover selecionado";
  document.body.appendChild(btnRemoverSelecionado);
  btnRemoverSelecionado.addEventListener("click", function() {
    const pokemonSelecionado = document.querySelector(".pokemon.selecionado");
    if (pokemonSelecionado) {
      pokemonSelecionado.parentNode.removeChild(pokemonSelecionado);
    } else {
      window.alert("Nenhum Pokémon selecionado para remover.");
    }
  });

  //22 Se o usuário tentar adicionar um Pokémon sem preencher o nome, exiba um alerta informando que o nome é obrigatório.
  // document.querySelector("#btnAdicionar").addEventListener("click", function() {
  //  const nomeInput = document.querySelector("#inputPokemon");
  //  const tipoInput = document.querySelector("#inputTipo");
  //  const nome = nomeInput.value.trim();
  //  const tipo = tipoInput.value.trim();
  /*   if (!nome) {
      window.alert("O nome do Pokémon é obrigatório.");
      return;
    }
    if (!tipo) {
      window.alert("O tipo do Pokémon é obrigatório.");
      return;
    }
    const listaPokemons = document.querySelector("#listaPokemons");
    const novoPokemonHTML = `<li class="pokemon" data-tipo="${tipo}">${nome}</li>`;
    listaPokemons.insertAdjacentHTML("beforeend", novoPokemonHTML);
    nomeInput.value = "";
    tipoInput.value = "";
  }); */

  //23 Ao clicar em um Pokémon da lista, altere também a imagem exibida na área de detalhes.
  document.querySelector("#listaPokemons").addEventListener("click", function(event) {
    if (event.target && event.target.matches("li.pokemon")) {
      const tipo = event.target.getAttribute("dCrie um contador que mostre quantos Pokémon existem atualmente na lista e atualize esse valor sempre que um item for adicionado ou removido.infoPokemon");
      infoPokemon.textContent = "Tipo do Pokémon: " + tipo;
      const imagemPokemon = document.querySelector("#imagemPokemon");
      imagemPokemon.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);
      imagemPokemon.setAttribute("alt", `Imagem de um Pokémon do tipo ${tipo}`);
    }
  });

  //Crie um contador que mostre quantos Pokémon existem atualmente na lista e atualize esse valor sempre que um item for adicionado ou removido.
  const contadorPokemons = document.createElement("p");
  contadorPokemons.id = "contadorPokemons";
  document.body.appendChild(contadorPokemons);
  function atualizarContador() {
    const listaPokemons = document.querySelector("#listaPokemons");
    const numeroPokemons = listaPokemons.children.length;
    contadorPokemons.textContent = "Número de Pokémon na lista: " + numeroPokemons;
  }
  atualizarContador();
  document.querySelector("#btnAdicionar").addEventListener("click", atualizarContador);
  document.querySelector("#btnRemoverUltimo").addEventListener("click", atualizarContador);
  btnRemoverSelecionado.addEventListener("click", atualizarContador); 
  
