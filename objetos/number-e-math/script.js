/*
//Number: função construtiva para números.
const numero = new Number(100)
console.log(numero); //Objeto

//Number.isNaN() e Numberi.isInteger(): métodos que mostram se o não é número ou se é integral. Retorna boolean.
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.34));
console.log(Number.isNaN(100));
console.log(Number.isNaN(NaN));

//Number.parseFloat() e Number.parseInt(): retorna um número a partir de uma string(parseFloat) e a string deve começar com um número. parseInt retorna um número inteiro.
console.log(parseFloat('87.7'));
console.log(parseFloat('R$ 87.7')); //NaN
console.log(parseFloat('87 reais'));

console.log(parseInt('87.7'));
console.log(Number.parseInt(4.453535665635));

//n.toFixed(decimais): arredonda o número de acordo com as casas decimais declarada no argumento. Retorna string
const preco = 3.8098908097809789709;
console.log(preco.toFixed()); //4. Número arredondado
console.log(preco.toFixed(2)); //3.81. Retorna duas casas decimais

//n.toString(): retorna o número em uma string.
console.log(preco.toString());

//n.toLocaleString(lang, options): formata um número em moeda. lang: linguagem, options: {style: 'currency', currency: moeda}
const moeda = 300.90;
const real = moeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(real);
const dolar = moeda.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
console.log(dolar);

//Math: objeto nativo que possui propriedades e métodos de experessões matemáticas.

//Math.abs(), Math.ceil(), Math.floor() e Math.round(): abs(): transforma o valor negativo em positivo. ceil(): arredonda o número pra cima, retornando o número inteiro e floor(): arredonda para baixo. round(): arredonda para o número integral mais próximo.
console.log(Math.abs(4 - 6)); //2
console.log(Math.abs(-6)); //6
console.log(Math.abs(3.4)); //3.4

console.log(Math.ceil(4.8)); //5
console.log(Math.ceil(4.2)); //5

console.log(Math.floor(4.6)); //4
console.log(Math.floor(4.2)); //4

console.log(Math.round(10.2)); //10
console.log(Math.round(10.8)); //11

//Math.max(), Math.min() e Math.random(): max() retorna o numero maior de uma lista de argumentos, min() retorna o numero menor da lista e random() retorna um numero aleatório entre 0 e 1.
console.log(Math.max(3, 5, 7, 9, 10, 1, -2)); //10
console.log(Math.min(3, 5, 7, 9, 10, 1, -2)); //-2

console.log(Math.random()); //retorna número decimal entre 0 e 1.
console.log(Math.round(Math.random() * 10)); //Retorna um número entre 0 e 10 já arredondado pelo método round.
//Retorna um numero aleatório entre dois números a escolha.
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50); //entre 50 e 100.
*/




//Exercícios
// Retorne um número aleatório entre 1050 e 2000
function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numAleatorio(1050, 2000));


// Retorne o maior número da lista abaixo.
const numeros = '4, 5, 20, 8, 9';
// const listaNumeros = numeros.split(', ');
// const numeroMaior = Math.max(...listaNumeros); //...spread: passa cada item do array como se fosse um argumento.
// console.log(numeroMaior);

function listarNumeros(listaString) {
    return listaString.split(', ');
}

function maiorNum(listaNumeros) {
    let arrayNumeros = listarNumeros(listaNumeros);
    return Math.max(...arrayNumeros);
}

console.log(maiorNum(numeros))

// Crie uma função para limpar os preços e retornar os números com centavos arredondados, depois retorne a soma total.
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200']; 

function limpaPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0
listaPrecos.forEach((preco) => {
    soma += limpaPreco(preco);
});

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
limpaPreco(listaPrecos[1]);


