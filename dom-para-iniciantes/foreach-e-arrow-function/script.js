//Foreach
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//   console.log(item);
// });

// i = 0;
// imgs.forEach(function(){
//   console.log(i++);
// });

//Arrow function
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// imgs.forEach(() => { console.log(i++)});

// imgs.forEach(item => console.log(item));

//Exercícios
//Mostre no console cada parágrafo do site.
const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach((item) => {console.log(item)});

//Mostre o texto dos parágrafos no console.;
// paragrafos.forEach((item) => {console.log(item.innerText)});

//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

//Parênteses nos parâmetros
imgs.forEach((item, index) => {
  console.log(item, index);
});

//Quando não há parâmetros é necessário colocar parênteses.
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);