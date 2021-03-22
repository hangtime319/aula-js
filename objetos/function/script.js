//Function: toda função é criada com o constructor Function e herda seus métodos e propriedades.
// function areaQuadrado(lado) {
//   return lado * lado
// }

//Podemos usar algumas propriedades como length e name
// const perimetroQuadrado = new Function('lado', 'return lado * 4'); 
// console.log(perimetroQuadrado.length); //retorna o total de argumentos que a função pede. 1
// console.log(areaQuadrado.length); //1
// console.log(perimetroQuadrado.name); //retorna o nome da function. anonymous pois a função não tem nome.
// console.log(areaQuadrado.name); //areaQuadrado

//Métodos do prototype Function.
//function.call(this, arg1, arg2, ...): executa a função e permite passar o argumento this da função.
// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }
// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }
// console.log(descricaoCarro()); //undefined
// console.log(descricaoCarro.call()); //undefined
// console.log(descricaoCarro.call(carro)); //Ford 2018

//O valor THIS faz referência ao objeto criado durante a construção do objeto(constructor function). Pode trocar a referência do método ao this, utilizando call().
// const carros = ['Ford', 'Fiat', 'VW'];
// carros.forEach((item) => {
//   console.log(item)
// });

//call()
// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor)
// }

// const li = new Dom('li');
// const ul = new Dom('ul')
// console.log(li);

//Através do prototype adicionamos uma classe no constructor function Dom.
// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe);
// };

//console.log(li.ativo('ativar')); //adicionou a classe ativar no primeiro
// console.log(ul.ativo('ativar'))

//Colocando um elemento um dentro de um objeto
// const novoSeletor = {
//   element: document.querySelector('ul')
// }

//Com call() colocamos o this que referencia o objeto(ul).
// Dom.prototype.ativo.call(novoSeletor, 'ativar');

//Array's e call(): utilizando o call() nas funções dos protótipos de Array, pois assim podemos estender os métodos de Array a objetos que são array-like.
// Array.prototype.mostreThis = function() {
//   console.log(this)
// }

// const frutas = ['Uva', 'Maçã', 'Banana']
// console.log(frutas.mostreThis());

// Array.prototype.pop.call(frutas); //remove o último item Banana. Mesma função que frutas.pop().
// console.log(frutas);

//Com array-like(HTMLCollection e NodeList).
// const li = document.querySelectorAll('li');
// const filtroLi = Array.prototype.filter.call(li, function(item) {
//   return item.classList.contains('ativo')
// });

// console.log(filtroLi); //retorna li que possui classe ativo

//function.apply(this, array1, array2, ...): funciona como o call(), mas a única é diferença é que os argumentos são passados em um array.
// const numeros = [1, 4, 6, 78, 90];
// console.log(Math.max.apply(null, numeros)); //90
// console.log(Math.max.call(null, 3, 5, 7, 98)); //98

//const li = document.querySelectorAll('li');

// function itemPossuiAtivo(item){
//   return item.classList.contains('ativo');
// };

//A única diferença é o array como segundo parãmetro em apply
//const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo); //Li não é um array e sim um NodeList. Retorna array com os dois li.ativo. 
//const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]); //ocorre um erro, pois li não é array.

//function.bind(this, arg1, arg2, ...): não irá executar a função, mas vai retornar a mesma com um novo contexto de this. Transforma a constante em função. Para ativar a função é só colocar o () fim da constante. 
// const li = document.querySelectorAll('li');  
// const filtrarLi = Array.prototype.filter.bind(li, function(item){
//   return item.classList.contains('ativo');
// });
// console.log(filtrarLi); //retorna a função
// console.log(filtrarLi()); //ativa a função

//No bind, não precisa passar todos os argumentos
// const carro = {
//   marca: 'Ford',
//   ano: '2020',
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} do ano de ${this.ano} acelerou ${aceleracao} em ${tempo}`;
//   }
// }
// console.log(carro.acelerar());

// const honda = { marca: 'Honda'}

//Atribui o método 'acelerar' que foi definido em 'carro' para o objeto 'honda' través do bind. e já passou o argumento 'honda' como padrão.
// const acelerarHonda = carro.acelerar.bind(honda);
// console.log(acelerarHonda('100km', '10seg'))

//Argumentos comuns: pode utilizar o bind para colocar argumentos fixos(padrão)
// function imc(altura, peso) {
//   return peso / (altura * altura)
// }
//console.log(imc(1.84, 72)); //21.266540642722116
//const imcNovo = imc.bind(null, 1.84); //primeiro argumento e this que faz referência a algum objeto específico. Como não há objeto, coloca o null. E 1.84 é o primeiro argumento fixo da função imc.
//console.log(imcNovo(72)); //Só colocamos o peso que é o argumento da função que falta.




//Exercícios
// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(totalCaracteres);
console.log(paragrafos);


// Crie uma função que retorne novos elementos html com os seguintes parâmetros: tag, classe e conteudo.
function criarElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? (elemento.classList.add(classe)) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento
}

console.log(criarElementos('h1', 'ativo', 'É só um teste'));

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
const novoElemento = criarElementos.bind(null, 'h1', 'titulo');
console.log(novoElemento('Mais um elemento criado com Sucesso!'))
console.log(novoElemento('Mais um elemento criado com Sucesso!'))