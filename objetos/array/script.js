/*
//Array: armazenam uma coleção de elementos. Podem ser strings, números, arrays, funções e etc.
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

console.log(instrumentos); //retorna o array.
console.log(precos[0]); //retorna o primeiro elemento do array
console.log(dados[1][2].cor); //retorna o parâmetro cor do segundo elemento dentro do array principal.
console.log(dados[2]('Leo')); //acessa a função andar que está dentro do array.


//Todo array herda os métodos e propriedades da função construtora Array
const instrumentos = ['Guitarra', 'Baixo', 'Violão']; 
const carros = new Array('Corola', 'Mustang', 'Honda'); 

instrumentos[0] = 'Cavaquinho'; //substitui o primeiro elemento([0]).
console.log(instrumentos);
carros[10] = 'Ferrari'; //cria um elemento na posição 10 do array, mas completa as outras posições com espaço vazio(empty). Pois array só tem 3 posições.
console.log(carros);
console.log(carros.length); //11


//Métodos
//Array.from(): transforma array-like objects em um array.
let li = document.querySelectorAll('li'); //NodeList
console.log(li);
li = Array.from(li); //Array
console.log(li);

const carros = {
    0: 'Fiat',
    1: 'Ford',
    2: 'Honda',
    length: 3
}
console.log(carros);
const arrayCarros = Array.from(carros); //retorna um array vazio. Tem que definirr dentro do objeto a propriedade length e o tamanho do array.
console.log(arrayCarros);

//Array.isArray(): verifica se é um array e retorna valor booleano.
console.log(Array.isArray(carros)); //false
console.log(Array.isArray(arrayCarros)); //true

//Array.of(argumentos): cria um array através dos argumentos passados
//Array() e new Array(): também cria uma array. Se colocar apenas um número, o construtor entende que quer criar um array vazio com tamanho determinado pelo argumento.
//OBS: a palavra new não pe necessário para o construtor Array.
//: 
console.log(Array.of(10, 1)); //[10, 1]
console.log(Array(10)); //[empty × 10]
console.log(Array(10, 2, 4)) //[10, 2, 4]
console.log(new Array(10));
console.log(new Array(10, 2, 4));


//Propriedades e métodos do Prototype
//[].length: retorna o tamanho do array.
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length); //tamanho do array. 3
console.log(frutas[1].length); //tamanho do item 1 do array. 4
console.log(frutas[2].length); //tem dois itens em uma posição do array. 2
console.log(frutas[2][0].length); //tamanho do primeiro item na posição 2 do array(Uva Roxa). 8

//Métodos modificadores
//[].sort(): organiza os elementos do array em ordem alfabética ou crescente. Organiza por cada caractere. Retorna o array modificado.
const instrumentos = ['Guitarra', 'Baixo', 'Violão']; 
console.log(instrumentos);
instrumentos.sort();
console.log(instrumentos);

const idades = [32,21,33,43,1,12,8]; 
console.log(idades);
idades.sort();
console.log(idades); //[1, 12, 21, 32, 33, 43, 8]. Procura pelo primeira caractere de cada item. Por isso, o 8 está na última posição pois é maior que todos os primeiros caracteres de cada item.


//[].unshift(): adiciona elementos no início do array e retorna a length. 
//[].push(): adiciona elementos no final do array e retorna a length.
const carros = ['Ford', 'Fiat', 'VW'];
console.log(carros); //["Ford", "Fiat", "VW"]
console.log(carros.unshift('Honda', 'Renault')); //Adiciona no início. 5
console.log(carros); //["Honda", "Renault", "Ford", "Fiat", "VW"]
console.log(carros.push('Fusca', 'Ferrari')); //Adiciona no fim do array. 7
console.log(carros); //["Honda", "Renault", "Ford", "Fiat", "VW", "Fusca", "Ferrari"]


//[].shift(): remove o primeiro elemento do array e retorna o mesmo.
//[].pop(): remove o último elemento do array e retorna o mesmo.
const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros2);
console.log(carros2.shift()); //Remove o primeiro elemento e retorna o elemento removido('Ford').
console.log(carros2); //["Fiat", "VW", "Honda"]
console.log(carros2.pop()); //Remove o último elemento e retorna o elemento removido('Honda').
console.log(carros2); //["Fiat", "VW"]


//[].reverse(): inverte os itens do array e retorna o novo array.
const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros3);
const carrosInvertido = carros3.reverse();
console.log(carrosInvertido);

//[].splice(index, remover, item1, item2, ...): adiciona valores no array a partir do index, remove a quantidade de itens que foi passada no segundo parâmetro e retorna esses itens.
const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros4.splice(1, 0, 'Fusca')); //retorna array vazia, pois não foi removido nenhum elemento.
console.log(carros4.splice(1, 2, 'Fusca')); //Retorna dois elementos removidos a partir do index solicitado(1).
console.log(carros4);

//[].copyWithin(alvo, inicio, final): a partir do alvo, vai copiar o array começando do início até o final e preencher a mesma com a cópia. Se não tiver valores de início e final, o padrão será 0 no início e o tamanho total do array no final.
const arrayItens = ['Item1', 'Item2', 'Item3', 'Item4'];
console.log(arrayItens.copyWithin(2, 0, 3)); //["Item1", "Item2", "Item1", "Item2"]
console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));


//[].fill(valor, inicio, final): preenche o array com o valor, do início até o fim.
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2)); //adiciona palavra banana no item1 e item2 e mantém o restante.
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana')); //adiciona em todo o array.

//Métodos de Acesso:
//[].concat(valor): concatena o array com o valor passado. Não modifica os arrays originais, só retorna o array modificado.
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes); //["Barco", "Aviao", "Carro", "Moto"]
const transportes2 = ['Nuvem', 'Ar'].concat(transporte1, transporte2, 'Terra');
console.log(transportes2); //["Nuvem", "Ar", "Barco", "Aviao", "Carro", "Moto", "Terra"];
const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);

//[].includes(valor): verifica se possui o valor na array. Retorna boolean.
//[].indexOf(valor): retorna o index do valor socilitado. Verifica o  valor encontrado primeiro.
//[].lastIndexOf(valor): retorna o index do valor socilitado. Verifica o  valor encontrado por último.
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens.includes('python')); //true
console.log(linguagens.indexOf('js')); //2
console.log(linguagens.lastIndexOf('js')); //5

//[].join(separador): junta todos os valores de uma array e retorna uma string.
let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2'); //Retira o h2
console.log(htmlString);
htmlString = htmlString.join('p'); //Insere o p.
console.log(htmlString); 

//[].slice(inicio, final): retorna os elementos do array começando do início até o final.
const linguagens = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens.slice(1, linguagens.length)); //["css", "js", "php", "python"];
console.log(linguagens.slice(2)); //["js", "php", "python"]

const cloneLinguagens = linguagens.slice(); //retorna todos os elementos.
console.log(cloneLinguagens);
*/


//Exercícios

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const firstValue = comidas.shift();
console.log(firstValue);
// Remova o último valor de comidas e coloque em uma variável
const lastValue = comidas.pop();
console.log(lastValue);
// Adicione 'Arroz' ao final da array
const addValueByLast = comidas.push('Arroz');
console.log(addValueByLast); //length 3
console.log(comidas); //["Frango", "Carne", "Arroz"]
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); //true

// Verifique se Juliana faz parte dos estudantes 
console.log(estudantes.includes('Juliana')); //false


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li, utilizando split e join
html = html.split('section');
html = html.join("ul");
html = html.split('div');
html = html.join('li');
console.log(html);

// Remova o último carro, mas antes de remover salve a array original em outra variável.
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const cloneCarros = carros.slice();
carros.pop();
console.log(carros, cloneCarros)








