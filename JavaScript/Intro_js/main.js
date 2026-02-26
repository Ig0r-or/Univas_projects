//Lista de Exercícios – Arrays e Objetos em JavaScript


//Exercício 1 – Criando Arrays
//Crie um array chamado 'filmes' contendo 5 filmes favoritos.
//- Mostre o primeiro filme.
//- Mostre o último filme.

let filmes = ["O Poderoso Chefão", "Forrest Gump", "A Origem", "Matrix", "Gladiador"];
console.log(filmes[0]);
console.log(filmes[4]);

//Exercício 2 – Alterando valores
//Dado o array:
//1. Altere 'verde' para 'amarelo'.
//2. Mostre o array atualizado.

let cores = ['azul', 'verde', 'vermelho'];
cores[1] = 'amarelo';
console.log(cores);

//Exercício 3 – Tamanho do Array
//Crie um array com nomes de 4 cidades.
//- Mostre quantos elementos existem usando .length.

let cidades = ["Pouso Alegre", "Campinas", "Alagoas", "Rio de Janeiro"];
console.log("O length das cidades é: " + cidades.length);

//Exercício 4 – push e pop
//Crie um array 'numeros' vazio.
//1. Adicione os números 10, 20 e 30 usando push.
//2. Remova o último elemento.
//3. Mostre o array final.

let numeros = [];
numeros.push(10);
numeros.push(20);
numeros.push(30);
numeros.pop();
console.log(numeros);

//Exercício 5 – unshift e shift
//Dado:
//1. Adicione 'Ana' no início.
//2. Remova o primeiro elemento.
//3. Mostre quem ficou na primeira posição.

let fila = ['João', 'Maria', 'Pedro'];
fila.unshift('Ana');
fila.shift();
console.log(fila[0]);
console.log(fila);

//Exercício 6 – slice
//Crie um array com 6 frutas.
//- Gere um novo array contendo apenas as frutas da posição 2 até 4 usando slice.

let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi", "Manga"];
let frutasSelecionadas = frutas.slice(2, 5);
console.log(frutasSelecionadas);

//Exercício 7 – includes e indexOf
//Dado:
//1. Verifique se 'Python' existe no array.
//2. Descubra a posição de 'Java'.

let linguagens = ['JavaScript', 'Python', 'Java', 'C'];
console.log("Achamo o homi: " + linguagens.includes('Python'));
console.log("Tá no: " + linguagens.indexOf('Java'));

//Exercício 8 – sort e reverse
//1. Ordene o array.
//2. Inverta a ordem.

let numeros2 = [5, 2, 9, 1, 5];
numeros2.sort((a, b) => a - b);
console.log(numeros2);
numeros2.reverse();
console.log(numeros2);

//Exercício 9 – Criando um objeto
//Crie um objeto 'aluno' com:
//- nome
//- idade
//- curso
//Mostre cada propriedade no console.

let aluno = {
    nome: "Carlos",
    idade: 22, 
    curso: "Sistemas de Informação",
};
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

//Exercício 10 – Adicionando método
//Adicione ao objeto 'aluno' um método chamado apresentar() que mostre:
//Olá, meu nome é X e faço o curso Y.

let alunoDnv = {
    nome: "Miguel",
    idade: 25, 
    curso: "Sistemas de Informação",

    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos e faço o curso ${this.curso}.`);
    }
};
alunoDnv.apresentar();

//Exercício 11 – Atualizando propriedades
//Altere a idade do aluno e exiba o objeto atualizado.

alunoDnv.idade = 26;
console.log(alunoDnv);
alunoDnv.apresentar();

//Exercício 12 – Lista de objetos
//Crie um array 'alunos' contendo 3 objetos com:
//- nome
//- nota
//Mostre apenas os nomes dos alunos.

let alunos = [
    { nome: "Alice", nota: 8.5 },
    { nome: "Bob", nota: 7.0 },
    {nome: "Neymar", nota: 9.0 },
];
console.log(alunos[0].nome);
console.log(alunos[1].nome);
console.log(alunos[2].nome);

//Exercício 13 – Média das notas
//Usando o array anterior, calcule a média das notas.

let somaNotas = 0;
for(let i = 0; i <alunos.length; i++) {
    somaNotas += alunos[i].nota;
}
let media = somaNotas / alunos.length;
console.log("A média das notas é: " + media);

//Exercício 14 – Criando uma classe
//Crie uma classe Pessoa com:
//- nome
//- idade
//Use um constructor para definir os valores e crie dois objetos.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoa1 = new Pessoa("Lucas", 30);
let pessoa2 = new Pessoa("Mariana", 28);
console.log(pessoa1);
console.log(pessoa2);

//Exercício 15 – Método da classe
//Adicione um método falar() que mostre:
//Olá, eu sou [nome].

// E 16 tbm
class PessoaDNV {
    //Usamos this.nome para acessar a propriedade nome do objeto atual. 
    // O this se refere ao objeto que está chamando o método, 
    // permitindo que o método acesse as propriedades do objeto de forma dinâmica, mesmo que o nome do objeto seja diferente.
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }  
    falar() {
        console.log(`Olá, eu sou ${this.nome}.`);
    }
}

//

let pessoa3 = new PessoaDNV("Fernanda", 35);
pessoa3.falar();

//Exercício 17 – 
// Mini Pokédex Crie uma classe Pokemon com: - nome - tipo - hp 
// Crie um método atacar() que mostre '[nome] atacou!'. 
// Depois: 1. Crie 3 pokémons. 2. 
// Coloque-os dentro de um array. 
// 3. Mostre o nome de todos os pokémons.

class Pokemon{
    constructor(nome, tipo, hp) {
        this.nome = nome;
        this.tipo = tipo;
        this.hp = hp;
    }
    atacar() {
        console.log(`${this.nome} atacou!`);
    }
}
let MarcoPoloDelNero = new Pokemon("MarcoPoloDelNero", "Elétrico", 100);
let EdnaldoRodrigues = new Pokemon("EdnaldoRodrigues", "Fogo", 120);
let JoseMariaAmarin = new Pokemon("JoseMariaAmarin", "Água", 110);
let pokemons = [MarcoPoloDelNero, EdnaldoRodrigues, JoseMariaAmarin];
for(let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i].nome);
}

