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

