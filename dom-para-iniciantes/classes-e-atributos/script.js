/*
//classList: mostra uma lista de classes dos elementos.
const menu = document.querySelector('.menu');
console.log(menu.classList);

//Adicionar classe
menu.classList.add('ativo');
console.log(menu.classList);

//Remover classe
menu.classList.remove('ativo');
console.log(menu.classList);

//Alterna entre Remover e adicionar classe.
menu.classList.toggle('ativo');
console.log(menu.classList);

//Retorna true ou false
if(menu.classList.contains('ativo')){
  console.log('Classe existe');
} else {
  console.log('Classe não existe');
}

//Substitui uma classe por outra.
menu.classList.replace('ativo', 'inativo');
console.log(menu.classList);

//Attributes: retorna um array-like com os atributos do ELEMENTO.
const sectionGrid = document.querySelector('.grid-section'); //Elemento selecionado com a classe grid-section.
console.log(sectionGrid.attributes[0]); //Retorna primeiro atributo
console.log(sectionGrid.attributes); //Retorna todos os atributos.

//getAttribute: retorna um atributo selecionado
const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');
console.log(srcImg);

//setAttribute
const altImg = img.setAttribute('data-text', 'Texto da Imagem');
console.log(img.hasAttribute('data-text'));
console.log(img.getAttribute('data-text'))


//Remove atributo
img.removeAttribute('data-text'); 

//Verifica se possui atributo no elemento. Return true ou false.
console.log(img.hasAttribute('alt'));
*/


//Exercícios
//Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu li a');
menu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item);
});

//Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro.
menu.forEach((item) => {
  item.classList.remove('ativo');
  console.log(item);
});
menu[0].classList.add('ativo');


//Verifique se as imagens possuem atributo alt.
const img = document.querySelectorAll('img');
img.forEach((item) => {
  console.log(item, item.hasAttribute('alt'));
});

//Modifique o href do link externo do menu
menu.forEach((item) => {
  // item.setAttribute('href', 'http://www.globo.com')
});