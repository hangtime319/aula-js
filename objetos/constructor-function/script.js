
/*
// Objetos: variáveis que armazenam valores.
const carro = {
  marca: "veículo",
  preco: 0
}

//Carrega as propriedades do objeto carro.
const honda = carro;
honda.marca = "Honda"; //Mudou a propriedade marca de veículo para Honda.
honda.preco = 3000; //Mudou a propriedade preco de 0 para 3000.

//Ao mesmo tempo, mudaram os valores das propriedades de carro que é o objeto inicial.
// console.log(carro);

//Para que isso não aconteça e que o objeto mantenha seus valores iniciais, utilizamos constructor functions que constroem novos objetos chamando as mesmas propriedades e as mantendo.
function Carro() {
  this.marca = 'Veículo' //this aponta para o objeto que será criado.
  this.preco = 0
}

//Usamos o new para chamar o constructor e herdar as propriedades.
const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 2000;

//Podemos passar parâmetros quando criamos o objeto constructor
function Moto(modeloAtribuido, valorAtribuido) { //Parâmetros
  this.modelo = modeloAtribuido, //criando uma propriedade para o objeto this que será criado.
  this.valor = valorAtribuido
}

const yamaha = new Moto('Yamaha', 4000);
// console.log(yamaha);

//this: faz referência ao objeto construído com o constructor function. Então para acessar as propriedades do constructor temos que referencia com this.
function Carro2(marca, precoInicial) {
  const taxa = 1.5;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const renault = new Carro2('Renault', 1000);
//Conseguimos acessar a propriedade marca do objeto criado, pois dentro do constructor está referenciado como this.
console.log(renault.marca);
//precoFinal não está referenciado com this e sim, está dentro de uma variável.
console.log(renault.precoFinal);


//Exemplo real: o valor da propriedade dentro do objeto muda.
const Dom = {
  seletor: 'li',
  //É o mesmo que element: function(){}
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo')
  },
}

Dom.element(); //Retorna o seletor li.
Dom.ativo(); //Retorna o seletor li com a classe ativo
Dom.seletor = 'ul'; //Agora o seletor do objeto é ul
Dom.ativo(); //Retorna ul com classe ativo.


//Transformando em um constructor function onde os valores das propriedades se mantém mesmo criando novos objetos.
function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  },
  //Pode adicionar parâmetros nas funções 
  this.ativo = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom('li');
li.element(); //Retorna a primeira li através do método element().
li.ativo('ativo'); //Adiciona a classe ativo no primeiro li
const lastLi = new Dom('li:last-child');
lastLi.element(); //Retorna o último li.
lastLi.ativo(); //Adiciona a classe ativo no último li.
*/


//Exercícios

// Transforme o objeto abaixo em uma Constructor Function 
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {     
//     console.log(this.nome + ' andou');  
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(nome + ' andou'); //Pode colocar this.nome
  }
}

const homem = new Pessoa('Leo', 34);
homem.andar();


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos   
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados 
// addClass(classe), adiciona a classe a todos os elementos 
// removeClass(classe), remove a classe a todos os elementos.

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  },
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  }
}

const listaLi = new Dom('li');
listaLi.elements;
listaLi.addClass('ativo');
listaLi.removeClass('ativo')