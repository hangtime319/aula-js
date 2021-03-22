//Native: objetos nativos são aqueles definidos na especificação da linguagem, independente do host.

//Host: objetos host são aqueles implementados pelo próprio ambiente. Como exemplo, o DOM onde temos os objetos do ambiente do browser.

//User: objetos do user são objetos definidos pelo seu aplicativo ou que importa de alguma biblioteca externa. Exemplo: const Pessoa = { nome: 'Leo'; }

//Exercícios

// Liste 5 objetos nativos
//R: Number, String, Array, Boolean e Math.

// Liste 5 objetos do browser
//R: window, HTMLCollection, Element, DOM e NodeList

// Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
//R: Chrome: webkitHidden, webkitFullScreen
if(typeof document.webkitHidden !== 'undefined') {
  console.log("Existe")
} else {
  console.log('Não existe')
}

