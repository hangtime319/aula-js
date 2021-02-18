/* Navegação por Tabs
  Regra de negócio: ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.

  Funcionamento: Assim que clicar no item da lista de animais, aparece um texto com a descrição do mesmo.

  Passo a Passo:
  1 - Adicionar classes no INDEX.HTML para manipulação dos elementos.
    1.1 - adicionar uma classe no elemento de animais-lista. js-tabmenu
    1.2 - adicionar uma classe no elemento de animais-descriçao. js-tabcontent
  
  2 - Selecionar os itens(elementos) no script.js

  3 - Função Callback: 
    3.1 - função recebe index como parâmetro para ativar a navegação por tab.
    3.2 - Adicionar classe ativo quando o elemento da lista for clicado e remover classe ativo dos demais elementos, se houver.
    Obs: as listas tem o mesmo número de itens.
  
  4 - Adicionar o evento passando a função anônima no callback para passar o indexMenu como parâmetro do activeTab pois está fora do escopo.

Verificações de erros:
  5 - Adicionar a classe ativo ao primeiro elemento da lista de descrição para ficar fixo.

  6 - Verificar se os elementos existem. Caso existir, rodar o código.

  7 - Colocar a classe js no INDEX.HTML para verificar se o javascript do navegador de quem acessa não estiver habilitado. Se não estiver habilitado adiciona automaticamente. Essa classe js está no css ante das classes que manipulam.

No CSS, colcoar as classes de animação que sai de display none para block.
*/


//Envolver tudo em uma função.
function initTabNav(){
  // 2
  const tabMenu = document.querySelectorAll('.js-tabmenu li'); //todos os elementos que serão clicáveis.
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo'); // 5

  // 6
  if (tabMenu.length && tabContent.length) {
    // 3
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    // 4
    tabMenu.forEach((itemMenu, indexMenu) => {
      itemMenu.addEventListener('click', () => {
        activeTab(indexMenu);
      });
    });
  }
}
initTabNav();


//===============================================================================================

/* Accordion List

  Quando clico em um elemento específico, o elemento escondido aparece.
  Adicionar em cada elemento da lista um evento(clique) e quando acontecer aparecer o elemento seguinte(nextElementSibling)

  1 - Adicionar a classe js-accordion no elemento dl faq-lista no arquivo INDEX.HTML.

  2 - Selecionar os elementos dt, onde serão clicados.
  
  3 - Inserir a classe ativo em cada elemento clicado.
  
  4 - Criar a função activeAccordion onde dispara o evento.
    4.1 - Nessa classe adicion a classe ativo no elemento dt e no dd para aparecer a descrição
  
  5 - Lembrando que tem que manter a classe ativo nos primeiros elementos dt e dd.

  6 - Envolver todo o evento em uma função para isolar.

  7 - Verificar se os elementos existem.


*/

function initAccordion() {
  // 2
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  // 7
  if(accordionList.length){
    // 5
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass)  
    // 4
    function activeAccordion(){
    //console.log(event.currentTarget) // Seleciona o elemento da lista. Pode usar o this que faz referência ao item de cada lista.
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
    // 3
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();


//===============================================================================================


