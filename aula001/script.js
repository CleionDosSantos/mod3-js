//variavel de escopo global
let a = 10;

const pi = 3.141592653589793;

console.log("PI: ", pi)



function multiplica(variavel, fpi){

    const pi = fpi * 2

    console.log("PI dentro da função:", pi);

    //variavel de escopo de função
    let a = variavel *2;
    console.log("dentro da função:", a);
}

multiplica(a, pi)
console.log("fora da função:", a);

//POO
let pessoa = {
    nome: "Cassiano",
    idade: 32
}
console.log(pessoa.nome);

//Datatype
var aa = 100;

console.log(typeof(aa));

aa = aa + "100";


console.log(typeof(aa));

// declaração de função
function multiplicacao(num){
    return num*num
}
//chamada de função
let result = multiplicacao(9)

console.log("result = ", result)

var pessoaa = function() {
    return {
        nome:"Cassiano",
        sobreNome:"Peres",
        idade:32
    };
}
pessoaa();

//Arrow functions
var p = () => ({nome: 'Cassiano', sobreNome: 'Peres', idade: 32})
console.log(p());

//escopo global
let globalVar = "Oi global"

function global() {
  console.log("na function global: ", globalVar);
}

function global2() {
  console.log("na function global2: ", globalVar);
}

global()

global2()

//Escopo de função 
let globalVarr = "Oi global"

function global() {
  console.log(globalVarr);
}

function global2() {
  //escopo de função
  let functionVar = "Oi função"
  console.log(globalVarr);
  console.log(functionVar);
}

global()
global2()
console.log(functionVar);

//escopo de bloco
function global3() {
    console.log(globalVar);
    //escopo de bloco
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log(i)
}
global3();