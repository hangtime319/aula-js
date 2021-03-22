/*
//Prototype: propriedade que adicionamos na função quando ela é criada. Sempre retorna um objeto. OBS: só é usada em funções.

function Pessoa(name, age) {
  this.name = name;
  this.age = age;
}

const leo = new Pessoa('Leo', 34);
leo.prototype; //undefined
Pessoa.prototype; //Retorna um objeto com os métodos e parâmetros da função.

//Podemos adicionar métodos e propriedades na função através do prototype.
Pessoa.prototype.andar = function(){
  return this.name + ' andou';
}

Pessoa.prototype.correr = function(){
  return this.name + ' correu';
}

//O objeto criado utilizando o construtor tem acesso aos métodos e propriedades adicionados pela propriedade prototype.
console.log(leo.andar());
console.log(leo.correr());

//Tem acesso ao método, pois foi criado pelo prototype, mas se acessar Pessoa sem prototype o método não aparece. Primeiro percorre a raiz da função e depois o prototype.
console.log(Pessoa);

leo.__proto__.andar(); //Escrita antiga e não mais utilizada.

//Herança de protótipo: o objeto tem acesso aos métodos e propriedades nativos do prototype Object.
// console.log(Object.prototype);
console.log(leo.toString());
console.log(leo.isPrototypeof);

//Construtores Nativos: objetos, strings, números e outros são criados por construtores nativos do JS. Possuem métodos e propriedades que podem ser acessadas pelo tipo de dado.
const pais = 'Brasil';
const cidade = String('Rio');
console.log(cidade);

//Métodos nativos de String. Para descobrir mais métodos devemos acessar String.prototype;
console.log(pais.charAt(0)); //B
console.log(cidade.charAt(1)); //i

console.log(String.prototype);

//Método do Objeto X Protótipo: existem métodos linkados ao objeto e métodos linkados ao prototype.
Object.getOwnPropertyNames(NodeList);
Object.getOwnPropertyNames(NodeList.prototype); //Tem mais funções 

const li = document.querySelectorAll('li');
console.log(li);
li.forEach((item) => {
  console.log(item);
})

//Importante entender o que está sendo retornado para acessar as funções certas.
const Carro = {   
  marca: 'Ford',   
  preco: 2000,   
  acelerar() {     
    return true;   
  } 
}

console.log(Carro); //Retorna Object então acessa métodos de Object
console.log(Carro.marca) //Retorna String. Acessa métodos de String.
console.log(Carro.preco); //Retorna número. Acessa métodos de Number.
*/


//Exercícios

// Crie uma função construtora de Pessoas 
// Deve conter nome, sobrenome e idade
function Pessoas (nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
const leo = new Pessoas('Leonardo', 'Amaral', 34)
console.log(leo);


 // Crie um método no protótipo que retorne o nome completo da pessoa 
 Pessoas.prototype.nomeCompleto = function() {
   return `${this.nome} ${this.sobrenome}`;
 }

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li'); 
li; //li.constructor.name: HTMLLIElement
li.click; //li.click.constructor.name:Function
li.innerText; //li.innerText.constructor.name: String
li.value; //li.value.constructor.name: Number
li.hidden; //li.hidden.constructor.name: Boolean
li.offsetLeft; //li.offsetLeft.constructor.name: Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
const teste = li.hidden.constructor.name;
console.log(teste)// o valor retorna em String. Sempre se atentar o que retorna.