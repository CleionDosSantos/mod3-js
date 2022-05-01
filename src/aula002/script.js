let a;
let b;

a = 30;
b = 20;

if( a > b) {
    console.log("A é maior que B")
}else{
    console.log("B é maior que A")
}
/*-----------------------------------------------*/
let opcao;
opcao = "F";

switch(opcao){
    case "H":
        console.log("Hamburguer");
        break;
    case "C":
        console.log("Coxinha");
        break;
    case "P":
        console.log("Pizza")
        break;
    default:
        console.log("Opção não existe no cardápio");
        break;
}

let idade;

idade = 17;

let maior = (idade >= 18 ? "É maior" : "É menor");

console.log(maior)
/*-----------------------------------------------*/
switch(opt){
    case "A":
        console.log("Amazon Prime");
        break;
    case "N":
        console.log("Netflix");
        break;
    case "H":
        console.log("HBO Max");
        break;
    case "D":
        console.log("Disney Plus");
        break;
    default:
        console.log("Opção inválida")
        break;
}
//POO com arranjo
let pessoas =[{
    nome:"Cassiano",
    idade:32,
    cargo: "Professor"
},
 {
    nome:"Jose",
    idade:32,
    cargo: "Programador"
}]

// console.log(pessoas[0])
// console.log(pessoas[0].idade)
// console.log(pessoas[0].cargo)

// console.log(pessoas[1])
// console.log(pessoas[1].idade)
// console.log(pessoas[1].cargo)
/*-----------------------------------------------*/
if(pessoas[0].idade > pessoas[1].idade){

    console.log(pessoas[0].nome, " é mais velho que ",pessoas[1].nome)

}else if(pessoas[0].idade < pessoas[1].idade){

    console.log(pessoas[0].nome, " é mais novo que ",pessoas[1].nome)

}else{

    console.log(pessoas[0].nome, " tem a mesma idade que ",pessoas[1].nome)

}
/*-----------------------------------------------*/
let opcaoo = 0;
let aumento = 5;

let streaming = [
    {
        nome:"Amazon Prime",
        mensalidade: 32.00,
    },
    {
        nome:"HBO Max",
        mensalidade: 42.00,
    },
    {
        nome:"Disney Plus",
        mensalidade: 50.00,
    }
];

switch(opcaoo){
    case 0:
        streaming[0].mensalidade += aumento; //37
        console.log(streaming[0]);
        break;
    case 1:
        streaming[1].mensalidade += aumento;
        console.log(streaming[1]);
        break;
    case 2:
        streaming[2].mensalidade += aumento;
        console.log(streaming[2]);
        break; 
    default:
        console.log("Opção não encontrada.")
        console.log(streaming)

}

