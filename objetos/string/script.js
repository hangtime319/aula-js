/*
const lanche = 'Pizza';
const comida = new String('Feijoada');
console.log(typeof lanche); //Retorna string
console.log(typeof comida); //Retorna objeto, pois vem da função nativa String.

//Podem acessar os mesmos métodos.
console.log(lanche.toUpperCase());
console.log(comida.toUpperCase())

//Métodos da String
//str.length: total de caracteres da string.
console.log(lanche.length); //5
console.log(lanche[1]); //i

//str.charAt: método que retorna o caractere de acordo com a index.
console.log(comida.charAt(0)); //F
console.log(comida.charAt(comida.length - 1)); //a

//str.concat(str1, str2, ...: concatena strings.
const menu = 'Hoje nosso cardápio é de ';
const cardapio = menu.concat(lanche, ' e ', comida); //Pode concatenar várias strings.
console.log(cardapio);

//str.includes: procura por string exata dentro de outra string. É case sensitive. Retona valor booleano.
const fruta = 'Pêra';
const listaFrutas = 'Banana, Maçã, Pêra, Uva';
console.log(fruta.includes(listaFrutas)); //Toda a string exata de listaFrutas não está em fruta.
console.log(listaFrutas.includes(fruta)); //String exata de fruta está em listaFrutas.

//str.startsWith(search) e str.endsWith(search): procura pela string exata que coomeça ou termina com a string solicitada no parâmetro. É case sensitive e retorna boolean.
console.log(fruta.startsWith('Pe')); //false, pois faltou o acento.
console.log(fruta.startsWith('ra')); //false, pois não começa com ra.
console.log(fruta.endsWith('ra')); //true, pois termina com ra

//str.slice(start, end): corta a string de acordo com valores de start e end. Retorna string
const frase1 = 'Transação de cliente';
const frase2 = 'Depósito de fornecedor';
const frase3 = 'Taxa de camisas';

console.log(frase1.slice(0, 7)) //Retorna a string a partir do index 0 e termina no index 7.
console.log(frase2.slice(10, 14)) //Retorna a string a partir do index 10 e termina no index 14.
console.log(frase3.slice(2, -2)) //Retorna a string a partir do index 10 e termina no penúltimo index(-2 = segundo item de trás para frente).
console.log(frase1.slice(-5)) //Pode ser um index.

//str.substring(start, end): igual ao slice, mas não aceita número negativo.
console.log(frase2.substring(0, 5));
console.log(frase2.substring(-5)); //Com número negativo retorna sempre a string completa.

//str.indexOf(search) e str.lastIndexOf(search): Retorna o index da string solicitada no parâmetro. indexOf(retorna o index assim que achar o resultado) e lastIndexOf(retorna o último resultado.)
const palavra = 'Gritaria';
console.log(palavra.indexOf('ta')); //Retorna o index 3 onde começa a string 'ta'.
console.log(palavra.lastIndexOf('ri')); //Retorna o index 5, sendo o último resultado para a string 'ri.
console.log(palavra.indexOf('ri')); //Retorna o index 1 onde é o primeiro resultado da string 'ri'.

//str.padStart(n, str) e str.padEnd(n, str): aumenta o tamanho da string de acordo com o parâmetro n. O segundo parâmetro str é a string que será preenchida. Caso não seja declarado, será preenchido com espaço.
const preco = 'R$ 10,00';
console.log(preco.padStart(20)); //Aumenta o tamanho de caracteres em 20, a partir do início.
console.log(preco.padEnd(20, '.')); //Aumenta o tamanho e preenche com ponto.

const valores = ['R$ 10,00', 'R$ 100,00', 'R$ 1.000,00']
valores.forEach((item) => {
  console.log(item.padStart(20, '.'))
});

//str.repeat(n): repete a string em n vezes.
const word = 'La';
console.log(word.repeat(10));

//str.replace(regexp|substr, newstr|function): troca parte de uma string por outra. Pode usar expressões regulares(regexp) ou um valor direto(substr). Se usar um valor direto, vai trocar apenas o primeiro valor que encontrar.
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
console.log(listaItens.replace(/[ ]+/g, ', ')); //Acha todos os espaços que tem no array e substitui por ', ';
console.log(listaItens.replace(' ', ', ')); //retira somente o primeiro espaço que encontra e coloca ', '.

//str.split(padrao): divide a string de acordo com o padrão passado como parâmetro e retorna um array.
const listaRoupas = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayRoupas = listaRoupas.split(' '); //quebra cada palavra após o espaço e coloca em um array.

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'; 
const htmlArray = htmlText.split('div');
console.log(htmlArray);
//str.join(string): junta cada item do array com a string do parâmetro.
const htmlNovo = htmlArray.join('section');
console.log(htmlNovo);

//str.toLowerCase() e str.toUpperCase(): transforma os caracteres em minúsculos ou maiúsculos.
const palavra1 = 'masculino';
const palavra2 = 'Feminino';
const palavra3 =  'FEMININO';

console.log(palavra1.toUpperCase());
console.log(palavra2.toLowerCase());
console.log(palavra3.toLowerCase());

console.log((palavra1.toLowerCase() === 'masculino')); //true

//str.trim(), str.trimStart() e str.trimEnd(): remove os espaços em branco do início ou final da string.
const valor = '           R$ 23,00  ';
console.log(valor.trim()); //remove os espaços que estão no início e fim da string. Entre os caracteres não remove.
console.log(valor.trimStart()); //remove espaços do início.
console.log(valor.trimEnd()); //remove espaços do final.
*/


//Exercícios

// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento  
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  { 
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTotal = 0
let recebimentoTotal = 0
transacoes.forEach((item) => {
  let valor = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0, 4).toLowerCase() === 'taxa'){
    valorTotal += valor;
  } else if (item.descricao.slice(0, 4).toLowerCase() === 'rece'){
    recebimentoTotal += valor;
  }
});
console.log(valorTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo 
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';  
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes);

// Substitua todos os span's por a's 
let html = `<ul>                 
                  <li><span>Sobre</span></li>                 <li><span>Produtos</span></li>                 <li><span>Contato</span></li>               
              </ul>`;

html = html.split('span').join('a');
console.log(html);

// Retorne o último caracter da frase.
const frase = 'Melhor do ano!';
console.log(frase.charAt(--frase.length)); //!


// Retorne o total de taxas 
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let countTaxa = 0;
transacoes2.forEach((item) => {
  let taxa = item.trim().toLowerCase().slice(0, 4);
  if (taxa === 'taxa') {
    countTaxa++;
  }
});
console.log(countTaxa);

