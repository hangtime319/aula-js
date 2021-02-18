/*
//clientHeight / clientWidth: altura ou largura + padding do elemento selecionado.
const section = document.querySelector('.animais');
console.log(
  section.clientHeight, 
  section.clientWidth
);

//offsetHeight / offsetWidth: altura ou largura + padding + borda.
console.log(
  section.offsetHeight,
  section.offsetWidth
);

//offsetTop / offsetLeft: distância entre o elemento e o topo ou esquerda da página.
const h1 = document.querySelector('h1');
console.log(
  h1.offsetHeight,
  h1.offsetLeft
);

//scrollHeight / scrollWidth: altura ou largura, mesmo dentro de um scroll.
const height = document.querySelector('.animais-lista');
console.log(
  height.scrollHeight,
  height.offsetHeight
);

//getBoundingClientRect: método que retorna valores como width, height, entre outros.
const rect = section.getBoundingClientRect();
console.log(rect.top); //Distância entre o elemento e o topo em relação ao scroll.
if (rect.top < 0) { console.log('Passou do elemento')}

//window: dimensões da janela.
console.log(
  window.innerHeight, //altura da janela
  window.outerHeight, //altura da janela até a aba do navegador
  window.innerWidth,
  window.outerWidth
  );

//pageYOffset / pageXOffset: distância total da posição do scroll vertical/horizontal da página.
console.log(window.pageYOffset, window.pageXOffset);

//matchMedia(): utiliza media-querie para verificar a largura do browser. Ideal para responsividade.
const medium = window.matchMedia('(max-width: 728px)');

if(medium.matches) {
  console.log('Tela menor que 728px');
} else {
  console.log('Tela maior que 728px');
}
*/


//Exercícios
// Verifique a distância da primeira imagem em relação ao topo da página.
const imgTop = document.querySelector('img');
console.log(imgTop.offsetTop);

// Retorne a soma da largura de todas as imagens.
function somaImagens(){
  const img = document.querySelectorAll('img');
  let soma = 0;
  img.forEach((item) => {    
    soma += item.offsetWidth;
  });
  console.log(soma);
}

//window.onload(): função que faz o javascript carregar após todos os elementos(imagens) carregarem.
window.onload = function(){
  somaImagens();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const link = document.querySelectorAll('a');
link.forEach((item) => {
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log('Possui boa acessibilidade');
  } else {
    console.log('Não possui acessibilidade');
  }
});



// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu.
const browser = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');

if(browser.matches) {
  menu.classList.add('menu-mobile');
}