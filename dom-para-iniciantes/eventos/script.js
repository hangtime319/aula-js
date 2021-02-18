// addEventListener: método que dispara uma callback(função) assim que um evento acontecer neste elemento.
/*const img = document.querySelector('.animais-lista');
function callback(event){
  console.log(event);
}
img.addEventListener('click', callback);
*/


//Event: primeiro parâmetro que ocorre no callback.
/*const images = document.querySelector('.animais-lista');
function showEvent(event) {
  const currentTarget = event.currentTarget; //Retorna o elemento que foi clicado.
  const target = event.target; //onde foi clicado
  const typeEvent = event.type; //tipo do evento
  const path = event.path; //caminho do elemento que recebeu o evento.
  console.log(event, currentTarget, target, typeEvent, path); 
}
images.addEventListener('click', showEvent);
*/

//event.preventDefault(): método que previne o comportamento padrão do evento no browser.
/*const linkExterno = document.querySelector("a[href^='http']");
function clickLink(event){
  event.preventDefault(); //evita que o link externo seja acessado.
  console.log(event.target.href);
}
linkExterno.addEventListener('click', clickLink);
*/

//this: em eventos, faz referência ao elemento que foi adicionado no addEventListener.
/*const img = document.querySelector('img');

function callback() {
  console.log(this); //retorna a imagem. this seria o elemento selecionado no querySelector.
  console.log(this.getAttribute('src'));
}
img.addEventListener('click', callback);
*/

//Outros eventos: click, mouseenter, resize, scroll...
/*const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
};

h1.addEventListener('mouseenter', callback);
*/

//Keyboard: pode adicionar atalhaos para facilitar a navageção do seu site.
/*function atalho(event) {
  if(event.key === "a")
    document.body.classList.toggle('azul');
  else if(event.key === "v")
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keypress', atalho);
*/

//forEach em eventos: aplicar um evento em uma lista de elementos.
/*const imgs = document.querySelectorAll('img');
function handleImg(event) {
  console.log(event.target, event.target.setAttribute('alt', 'Imagem'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});
*/

//Exercícios
// Quando o usuário clicar nos links internos do site,adicione a classe ativo ao item clicado e remova dos demais itens caso(callback) eles possuam a mesma. Previna o comportamento padrão desses links.
const linkInterno = document.querySelectorAll('a[href^="#"]');

function addClassAtivo(event) {
  event.preventDefault();
  linkInterno.forEach((item) => {
    item.classList.remove('ativo')
  });
  event.currentTarget.classList.add('ativo')
}

linkInterno.forEach((link) => {
  link.addEventListener('click', addClassAtivo)
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.
/*
const allElements = document.querySelectorAll('body *'); //seleciona todos os elementos a partir do body.
function showElement(event) {
  console.log(event.currentTarget);
}

allElements.forEach((element) => {
  element.addEventListener('click', showElement);
});
*/


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento. 
/*
const body = document.body;
function removeElement(event) {
  console.log(event.target.remove())
}
body.addEventListener('click', removeElement);
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyT (event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('fonte')
  }
}

window.addEventListener('keydown', handleKeyT);
