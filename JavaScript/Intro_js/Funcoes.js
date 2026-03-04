
//1
let nome = "Igor";
let idade = 20;

console.log("Olá meu nome é " + nome + " e tenho " + idade + " anos.")

//2
function saudacao(){
console.log("Olá, " + nome + " veja bem viado!")
}
saudacao();

//3
function soma(x, y){
    console.log("3: " + (x+y));
}
soma(10,20);

//4
function doblo(x){
    console.log("4: " + x*2);
}

doblo(9);

//5
let numeros = [1,2,3,4,5];
let soma2 = 0;

function somaArray(numeros){
    for(let i = 0; i < numeros.length; i++){
        soma2 = soma2 + numeros[i];
    }
    console.log("5: " + soma2)
}
somaArray(numeros);

//6

let nomes = ["Joaz", "Ronaldo", "Pedro", "Antonio", "Mauricio"];
function somaNomes(...nomes){
    for(let i = 0; i < nomes.length; i++){
        console.log(nomes[i]);
    }
}
somaNomes(...nomes);

//7
function media(x,y,z){
    console.log("7: " + (x+y+z)/3);
}
media(10,20,30);
//8

let aluno = {
    nome: "Igor",
    idade: 20,
    curso: "Engenharia de Futebol",

    apresentar(){
        console.log("Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos e curso " + this.curso);
    },
    apresentarAluno(){
        console.log("9: Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos e curso " + this.curso);
    }
}
aluno.apresentar();
aluno.apresentarAluno();

//10

let produtos = [
    {nome: "Camiseta", preco: 50},
    {nome: "Calça", preco: 100},
    {nome: "Tênis", preco: 200}
];
  
function listarProdutos(produtos){
    for(let i = 0; i < produtos.length; i++){
        console.log("10: " + produtos[i].nome + " - R$" + produtos[i].preco);
    }
}
listarProdutos(produtos);

//11
function verificarIdade(idade){
    if(idade >= 18){
        console.log("11: Você é maior de idade.");
    } else {
        console.log("11: Você é menor de idade.");
    }
}
verificarIdade(20);

//12
 function calcularAreaRetangulo(base, altura){
    console.log("12: A área do retângulo é " + (base * altura));
}
calcularAreaRetangulo(10, 5);

//13

function numeroMaior(a, b, c){
    if(a > b && a > c){
        console.log("13: O número maior é " + a);
    } else if(b > a && b > c){
        console.log("13: O número maior é " + b);
    } else {
        console.log("13: O número maior é " + c);
    }
}
numeroMaior(10, 20, 30);

//14
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 1994,

    ExibirComentario(){
        console.log("14: O carro é um " + this.marca + " modelo " + this.modelo + " do ano " + this.ano);
    }
}
carro.ExibirComentario();

//15
let x = 10;
function teste(){
    let x = 5;
    console.log(x);
}
teste();
console.log("15: " + x);

//16
function soma(a, b){
    return a + b;
}
console.log("16: " + soma(10, 20));

//17
let array = [1, 2, 3, 4, 5];

 function contarElementos(array){
    console.log("17: O número de elementos no array é " + array.length);
}
contarElementos(array);

//18

function verificarParidade(numero){
    if(numero % 2 === 0){
        console.log("18: O número " + numero + " é par.");
    } else {
        console.log("18: O número " + numero + " é ímpar.");
    }
}
verificarParidade(10);
verificarParidade(7);
verificarParidade(0);

//19
class Pokemon{
    nome;
    tipo;
    hp;

    constructor(nome, tipo, hp){
        this.nome = nome;
        this.tipo = tipo;
        this.hp = hp;
    }
    exibirInformacoes(){
        console.log("19: O Pokémon " + this.nome + " é do tipo " + this.tipo + " e tem " + this.hp + " pontos de HP.");
    }

}
let MarcoPoloDelNero = new Pokemon("MarcoPoloDelNero", "Elétrico", 100);
let EdnaldoRodrigues = new Pokemon("EdnaldoRodrigues", "Fogo", 120);
let JoseMariaAmarin = new Pokemon("JoseMariaAmarin", "Água", 110);
let pokemons = [MarcoPoloDelNero, EdnaldoRodrigues, JoseMariaAmarin];
for(let i = 0; i < pokemons.length; i++) {
    pokemons[i].exibirInformacoes();
}

//20

let objetos = [
    {nome: "Cadeira", preço: 10},
    {nome: "Mesa", preço: 20},
    {nome: "Sofá", preço: 50}
];

function calcularTotal(objetos){
    let total = 0;
    for(let i = 0; i < objetos.length; i++){
        total += objetos[i].preço;
    }
    console.log("20: O preço total dos objetos é R$" + total);
}
calcularTotal(objetos);