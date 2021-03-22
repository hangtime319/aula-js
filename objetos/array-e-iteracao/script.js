//[].forEach(callback(item, index, array)):  possui 3 argumentos como itemAtual, index e array. Essa função de callback é executada a cada item.
//const carros = ['Ford', 'Fiat', 'Honda']; 
// carros.forEach(function(item, index, array) {
//   console.log(item, index, array)
// });

//E o método retorna sempre undefined.
// const arrayCarros = carros.forEach((item, index, array) =>{
//   console.log(item.toUpperCase());
// });
// console.log(arrayCarros);

//Arrow funtion.
// carros.forEach((item, index, array) =>{
//   console.log(item.toUpperCase());
// });

//Quando há uma linha, não é necessário chaves {}. E quando tiver um parâmetro, não precisa colocar parênteses.
//const li = document.querySelectorAll('li');
//li.forEach(item => item.classList.add('ativo'));
//li.forEach((item, index, array)=> { item.classList.add('ativo' + index)})

//Moodifica o array original: o terceiro argumento(array) se for li.formodificado, também modifica o original.
//carros.forEach((item, index, array) => {
//  array[index] = 'Carro ' + item;
//});
//console.log(carros); //Para isso, melhor usar o método map

//[].map(item, index, array): esse método tem a mesma função que o forEach, mas retorna o array modificado e não undefined. Se for para modificar uma array, utilize map, posi assim você pode iterar com a nova array e seus valores novos.
// const newCarros = carros.map((item, index) => {
//   return 'Carro ' + item;
// });
// console.log(carros); //retorna array original.
// console.log(newCarros); //retorna o array modificado.

//OBS: toda função tem que ter um return. Caso não tenha, retorna undefined.

//Arrow function e map: arrow function de linha única vai retornar o valor após o =>.
//const numeros = [2, 4, 6, 8, 10, 12, 45, 60];
//const numerosX2 = numeros.map(n => n * 2);
//console.log(numerosX2); //retorna uma nova array com cada item multiplicado por 2

//[].map com objetos: se preferir pode iterar com um único valor de cada objeto dentro do array.
// const aulas  = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ] 
// const puxarNomes = aula => aula.nome; //função que retorna o nome de cada aula.
// const aulasNome = aulas.map(puxarNomes); //pode usar métodos nos argumentos
// const tempoAulas = aulas.map(item => item.min);

//console.log(aulasNome);
//console.log(tempoAulas);

//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial): executa o callback para item do array. Acumulador apenas retorna a iteração anterior. O retorno do reduce será sempre um valor final.
// const total1 = tempoAulas.reduce((acumulador, atual) => {
//   console.log(acumulador, atual);
//   return acumulador + atual;
// }, 100); //Se não colocar o acumulador inicial, a primeira iteração é ignorada e o acumulador seria o primeiro item do array.

//console.log(total1); //170

// const valores = [10, 30, 3, 7, 45, 78, 1];
// const numMaior = valores.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual
// });

//console.log(numMaior); //78

//Retornando outros valores com [].reduce(): 
// const nomeAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   // console.log(acumulador)
//   return acumulador;
// }, {}); //se não colocar chaves vazia(objeto vazio) ignora a primeira iteração com o primeiro elemento. Então retorna um pobjeto sem o primeiro nome da aula

//console.log(nomeAulas); //retorna um objeto com o nome das aulas.

//[].reduceRight(): mesma função do reduce, mas começando pelos elementos à direita do array, ou seja, iniciando a iteração pelo último elemento.
// const frutas = ['Banana', 'Pêra', 'Uva']; 
// const rightFrutas = frutas.reduceRight((acumulador, item) => acumulador + ' ' + item);

// console.log(rightFrutas); //Uva Pêra Banana

// const rightAulas = aulas.reduceRight((acumulador, item) => {
//   return acumulador + ' ' + item.nome;
// }, {});

// console.log(rightAulas);

//[].some(): se um objeto da iteração for verdadeiro, retorna true.
//const frutas = ['Banana', 'Pêra', 'Uva'];
// const someFrutas = frutas.some((fruta) => {
//   return fruta === 'Uva';
// });
// console.log(someFrutas); //true

// const numeros = [0, 43, 22, 88, 101, 2];
// const maiorQue100 = numeros.some(num => num > 100);
// console.log(maiorQue100); //true

//[].every(): verifica se todos os itens do array são verdadeiros. Caso seja, retorna true. Se houver algum item falso como '', 0 ou undefined retorna falso.
// const everyFrutas = frutas.every(fruta => fruta);
// console.log(everyFrutas); //true

// const numeros = [4, 5, 6, 9, 13]
// const everyNumeros = numeros.every(num => num >= 3);
// console.log(everyNumeros); //true

//[].find() e [].findIndex(): retorna o valor atual da primeira iteração que retornar verdadeiro. E findIndex retorna o index do item solicitado.
// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// const anyFrutas = frutas.find(fruta => fruta === 'Banana')
// console.log(anyFrutas); //Banana
// const indexFrutas = frutas.findIndex(fruta => fruta === 'Uva');
// console.log(indexFrutas); //2

//const numeros = [6, 43, 22, 88, 87, 29];
//const findNumeros = numeros.find((num => num > 45))
//console.log(findNumeros); //88, pois foi o primeiro número maior que 45 da esquerda para direita.

//[].filter(): retorna um array com a lista de valores que retornam verdadeiro durante a iteração.
//const numeros = [6, 43, 22, 88, 101, 29]; 
//const maiorQue45 = numeros.filter((x => x > 45));
//console.log(maiorQue45); //88, 101

//const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
//const arrayLimpa = frutas.filter(frutas => frutas);
//console.log(arrayLimpa); //["Banana", "Uva", "Maçã"]. retorna todos os elementos verdadeiros, retirando do array os que são falsos como '', null, 0 e undefined.

// const aulas = [   {     nome: 'HTML 1',     min: 15   },   {     nome: 'HTML 2',     min: 10   },   {     nome: 'CSS 1',     min: 20   },   {     nome: 'JS 1',     min: 25   }, ];
// const aulasMaiores = aulas.filter(aula => aula.min >= 20)
// console.log(aulasMaiores)





// Exercícios
// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso.
//Seleciona cada curso. Retorna NodeList.
const section = document.querySelectorAll('.curso');
//Transforma em array para acessar os métodos de array.
const cursos = Array.from(section);
//Utiliza o map para retornar um array com objetos.
const listaCursos = cursos.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
});
console.log(listaCursos)





// Retorne uma lista com os números maiores que 100 
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(num => num > 100)
console.log(maiorQue100)

// Verifique se Baixo faz parte da lista de instrumentos e retorne true 
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const baixo = instrumentos.some(instrumento => instrumento === 'Baixo');
console.log(baixo);
 

// Retorne o valor total das compras 
const compras = [   
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  }, 
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const precos = compras.map((item) => { 
  return +item.preco.replace('R$ ', '').replace(',', '.');
});

const precosTotal = precos.reduce((acumulador, atual) => {
  return acumulador + atual
}, 0);

console.log(precos);
console.log(precosTotal);

