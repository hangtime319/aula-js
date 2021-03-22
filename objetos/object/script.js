//Object: todo objeto é criado através do constructor Object e por isso herda seus métodos e propriedades do prototype.
// const pessoa = new Object({
//   nome: 'Leonardo',
//   idade: 35,
//   andar() {
//     return this.nome + ' andou';
//   }
// });

// const videogame = {
//   marca: 'Sony',
//   cor: 'preto'
// }

// console.log(pessoa);
// console.log(videogame);

//Métodos de Object
//Object.create(obj, defineProperties): retorna um novo objeto que terá como protótipo o objeto do primeiro argumento(obj).
// const gente = Object.create(pessoa)
// console.log(gente)

// const carros = {
//   rodas: 4,
  //esse método define a propriedade marca.
//   init(marca) {
//     this.marca = marca;
//     return this
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return `${this.marca} buzinou`;
//   }
// }

// const honda = Object.create(carros)
// console.log(honda)
// console.log(carros)
// console.log(honda.init('Honda').acelerar())
// console.log(honda)

//Object.assign(objeto alvo, obj1, obj2): adiciona ao obj. alvo as propriedades e métodos dos demais objetos. Assign modifica o objeto alvo.
// const funcaoAutomovel = {
//   acelerar(){
//     return 'acelerou'
//   },
//   buzinar(){
//     return 'buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// const carro = {
//   rodas: 4,
//   mala: true
// }

// Object.assign(moto, funcaoAutomovel); //Se colocar carro no terceiro argumento, o valor da propriedade rodas que tem em carro vai para moto.
// console.log(moto); //moto tem todas os métodos de funcaoAutomovel.
// console.log
// Object.assign(carros, funcaoAutomovel)
// console.log(carros.acelerar()); //Modificou o método do objeto carros.

//Object.defineProperties(alvo, propriedades): adiciona ao alvo novas propriedades. As características podem ser definidas através de algumas configurações específicas.
// const motos = {};
// Object.defineProperties(motos, {
//   rodas: {
//     value: 2, //valor da propriedade
//     configurable: true, //true: impede de deletar e mudar o value
//     writable: true, //impede a mudança de valor. Sobrepõe o configurable.
//     enumerable: true, //torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: false,
//     writable: true
//   }
// });

// delete motos.rodas;
// motos.rodas = 3;
// delete motos.capacete;
// console.log(motos)

//get e set: podemos mudar comportamento do objeto com get e set de uma propriedade. Get retorna o valor e set define o valor.

// const moto = {}
// Object.defineProperties(moto, {
//   velocidade: {
//     enumerable: true,
//     get(){
//       return this._velocidade; //_velocidade para não confundir com a propriedade.
//     },
//     //função set ocorre quando o valor de velocidade é definido
//     set(valor){
//       this._velocidade = valor + 'km'
//     }
//   }
// })
// moto.velocidade = 20;
// console.log(moto.velocidade); //20km
// console.log(moto);

// Object.getOwnPropertyDescriptors(obj): lista todos os métodos e propriedades de um objeto, com as devidas configurações.
// console.log(Object.getOwnPropertyDescriptors(Array));
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// console.log(Object.getOwnPropertyDescriptors(motos));

// Object.getOwnPropertyDescriptor(obj): lista de uma única propriedade
// console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'));
// console.log(Object.getOwnPropertyDescriptor(Array, 'from'));

// Object.keys(): retorna um array com as chaves de todas as  proprieadades diretas e enumeráveis do objeto.
// console.log(Object.keys(Array)); //vazio, porque todos os métodos e propriedades do Array estão configurados como enumerable: false
// console.log(Object.keys(moto)); //propriedade velocidade e _velocidade.

// Object.values(obj): retorna um array com os valores do objeto.
// console.log(Object.values(Array)); //vazio
// console.log(Object.values(moto)); //[20km(velocidade), 20km(_velocidade)]
// const carro = {
//   marca: 'Ford',
//   ano: 2019
// }

// console.log(Object.values(carro)); //[Ford, 2019]

//Object.entries(obj): retorna um array com arrays congtendo chave e valor.
// console.log(Object.entries(carro)); //["marca", "Ford"], ["ano", 2019].

//Object.getOwnPropertyNames(obj): retorna um array com todas as propriedades diretas do objeto(não retorna as do protótipo)
// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object.getOwnPropertyNames(moto));

//Object.getPrototypeOf(obj):retorna o protótipo do objeto
// const frutas1 = ['Uva', 'Pêra'];
// const frutas2 = ['Uva', 'Pêra'];
// console.log(Object.getPrototypeOf(motos));
// console.log(Object.getPrototypeOf(frutas1))

//Object.is(obj): verifica se os objetos são iguais e retorna true ou false.
// console.log(Object.is(frutas1, frutas2)); //false. Mesmo com o conteúdo igual, estão em objetos diferentes.
// const novaFrutas = frutas2;
// console.log(Object.is(frutas2, novaFrutas));//true, pois novaFrutas esta sendo referenciada com frutas2.

//Object.freeze(obj): impedem qualquer mudança nas propriedades.
//Object.freeze(carro);
// carro.marca = 'Honda';
// console.log(carro.marca); //Ford
//console.log(Object.isFrozen(carro)); //verifica se o objeto é freeze. true

//Object.seal(obj): previne a adição de novas propriedades e impede que as atuais sejam deletadas. Consegue modificar o valor da propriedade.
//Object.seal(carro);
// carro.marca = 'Honda';
// carro.portas = 4;
// delete carro.marca;
// console.log(carro);
//console.log(Object.isSealed(carro)); //verifica se o objeto é seal; true

//Object.preventExtensions(obj): previne a adição de novas propriedades.
//Object.preventExtensions(carro);
// carro.portas = 4;
// console.log(carro);
//console.log(Object.isExtensible(carro)); //verifica se o objeto é Extensible. false

//Propriedades e métodos do protótipo.
//obj.constructor: retorna o construtor do objeto.
// const aviao = {
//   marca: 'Boeing',
//   asas: 2,
//   turbina: 4,
//   capacidade: true,
//   voar: function(){
//     return this.marca + ' decolou';
//   }
// }

//const frase = 'Olá Mundo!';

// console.log(aviao.constructor); //Object
// console.log(frase.constructor); //String

//obj.hasOwnProperty('prop'): verifica se possui a propriedade e retorna true. Ou seja, se a propriedade é diretamente do objeto.
//const frutas = ['Banana', 'Uva'];

//console.log(frutas.hasOwnProperty('map')); //false, pois map é uma propriedade do prototype constructor Array.
// console.log(Array.hasOwnProperty('map')); //false
// console.log(Array.prototype.hasOwnProperty('map')); //true
// console.log(aviao.hasOwnProperty('turbina')); //true

// obj.propertyIsEnumerable('prop'): verifica se a propriedade é enumerável
// console.log(Array.prototype.propertyIsEnumerable('map')); //false
// console.log(window.propertyIsEnumerable('innerHeight')); //true

//{}.isPrototypeOf(valor): verifica se é o protótipo(prototype) do valor passado.
//console.log(Array.prototype.isPrototypeOf(frutas)); //true

//Object.prototype.toString.call(valor): retorna o tipo do objeto. Se usarmos {}.toString() retorna o valor convertido em string.
// const pera = 'Pêra';
// console.log(frutas.toString()); //Banana, Uva
// console.log(Object.prototype.toString.call(frutas)); // [object Array]
// console.log(Object.prototype.toString.call(pera)); // [object String]




//Exercícios

// Crie uma função que verifique corretamente o tipo de dado.
function verifyData(data){
  return Object.prototype.toString.call(data);
}

const dados = [1, 3, 6];
console.log(verifyData(dados));

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const square = {};
Object.defineProperties(square, {
  lados: {
    value: 4,
    configurable: true
  }
});
// Object.freeze(square);
// delete square.lados;
square.lados = 3;
console.log(square)

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)
// Object.seal(configuracao)
// Object.preventExtensions(configuracao)

configuracao.width = 900
delete configuracao.height;
configuracao.margin = 80;
console.log(configuracao)


// Liste o nome de todas as propriedades do protótipo de String e Array.
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype))
