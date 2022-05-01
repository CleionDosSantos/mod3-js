//repete enquanto o valor de "i" for menor ou igual a 10
while(i <= 10){
    console.log(2*i);
    i++;
}
/*-----------------------------------------------*/
let a = 1;

do{

	console.log(2*a);
	a++;

}while(a <= 10)
//repete o loop enquanto a variável "i" for menor ou igual a 10, fazendo a verificação no final

/*-----------------------------------------------*/
var i = 11;
//repete enquanto o valor de "i" for menor ou igual a 10
while(i <= 10){

    console.log(2*i);

    i++;
}
/*-----------------------------------------------*/
for(let i = 1; i <= 10; i++){

    console.log("Valor de i:", i)
    
}
/*-----------------------------------------------*/
let usuario = {
    nome: 'Cassiano',
    idade: 32,
    email: 'cassiano@transformatec.com'
}

console.log(usuario["email"])
console.log(usuario["nome"])
console.log(usuario.idade)

/*-----------------------------------------------*/
for (propriedade in usuario) {
    console.log("Propriedade do usuário: " + usuario[propriedade])
}

/*-----------------------------------------------*/


for (propriedade in usuario) {
    console.log(propriedade + " : " + usuario[propriedade])
}
/*-----------------------------------------------*/

let carros = [ 'fiesta', 'onix', 'fusca', 'saveiro' ];

for (let carro of carros) {
    console.log(carro);
}
/*-----------------------------------------------*/

let carross = [ 
    {
        modelo:"Celta",
        cor:"Preto",
        ano:"2014"
    },
    {
        modelo: "Uno super-sônico de escada e adesivo de empresa de internet",
        cor: "Branco",
        ano: 1991
    },
    {
        modelo: "Marea bomba",
        cor: "Queimado",
        ano: 2001
    }
];

for (let carro of carross) {
    
    for(propriedade in carro){
        console.log(propriedade + ":" + carro[propriedade])
    }
}
/*-----------------------------------------------*/

let car = [ 
    {
        modelo:"Celta",
        cor:"Preto",
        ano:"2014"
    },
    {
        modelo: "Uno super-sônico de escada",
        cor: "Branco",
        ano: 1991
    },
    {
        modelo: "Marea bomba",
        cor: "Queimado",
        ano: 2001
    },
    {
        modelo: "Lancer do Braia",
        cor:"verde limão",
        ano: 2002
    }
]

console.log(typeof(car))

//vetor        //objeto do vetor
car.forEach(carro => {
        //propriedade do objeto do vetor
        carro.cor = "branco"
        console.log(carro)
    }
);
/*-----------------------------------------------*/

let numeros = [ 1,2,4,5]
// filtra e retorna um resultado de acordo com a condição, varrendo todos os itens contidos no vetor.
// Cria uma variável "numero" para cada item dentro do vetor "numeros"
let result = numeros.filter(
    function (numero){
        return numero>3
    }
)
console.log(result)