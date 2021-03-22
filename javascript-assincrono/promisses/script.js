// new Promise(): constructor function de promessas, onde é guardada duas funções que podem ser resolvidas(resolve) ou rejetidas(reject).
//Resolve(): primeira arugmento de promise, onde a função é executada caso a condição seja atinjida.
//Reject(): segundo argumento de promise onde promise é rejeitado e passamos uma mensagem de erro.Error('mensagem personalizada').
//Promise não faz sentido quando é executado com intervalo de tempo, pois é um código assíncrono.
// const soma = function soma(a, b){
//   let c = (a + b)
//   return c
// }
// const promessa = new Promise(function(resolve, reject){
//   let condicao = true;
//   if(condicao) {
//     resolve('Resolvido!');
//   } else {
//     reject(Error('Ocorreu um erro!'));
//   }
// });
// console.log(promessa);

//then(): é um método do protótipo de promise, ou seja, o objeto criado pode acessá-lo. O callback desse método será acessado caso promise seja resolvido(resolve). O argumento do método then é o valor passado na função resolve
// promessa.then((resolucao) => {
//   console.log (resolucao);
// });

//then().then(): podemos colocar then depois de outro then fazendo um encadeamento de promises. O valor do primeiro argumento de cada then, será o valor do return anterior.
// const promessa = new Promise((resolve, reject) => {
//   resolve('Etapa 1');
// });
// promessa.then(resolucao => {
//   console.log(resolucao);
//   return 'Etapa 2';
// }).then(resolucao =>{
//   console.log(resolucao);
//   return 'Etapa 3';
// })
// .then(resolucao => {
//   console.log(resolucao);
// });

// console.log(promessa);

//catch(): método cujo callback é ativado caso a promise seja rejeitada(reject).
const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if(condicao) {
    resolve("Resolvido!");
  } else {
    reject(Error("Ocorreu um erro!"))
  }
});

// promessa.then(resolucao =>{
//   console.log(resolucao);
// }).catch(rejeitado => {
//   console.log(rejeitado);
// });

//then(resolve, reject): pode passar os dois argumentos no método then. Caso a promise seja rejeitada, será ativada o segundo argumento de then.
// promessa.then((resolucao) => {
//   console.log(resolucao);
//   }, rejeitado => {
//     console.log(rejeitado);
// });

//finally(): executa a função anônima assim que a promise acabar. Finally executa a função independente do resultado final, sendo rejeitado ou não.
// promessa.then(resolucao => {
//   console.log(resolucao);
// }, rejeitado => {
//   console.log(rejeitado);
// }).finally(() => {
//   console.log('Acabou');
// });

// console.log(promessa);

//Promise.all(): retorna uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma tenha sido rejeitada. O retorno é um array com as respost as de cada promise.
const login = new Promise(resolve =>{
  setTimeout(() => {
    resolve('Login efetuado')
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

// const tudoCarregado = Promise.all([login, dados]);
// tudoCarregado.then(respostas => {
//   console.log(respostas);
// });

// console.log(tudoCarregado)

//Promise.race(): retorna uma nova promise assim que a primeira for resolvida ou rejeitada. Retorna a resposta da primeira resolvida.

const carregouPrimeiro = Promise.race([login, dados]);
carregouPrimeiro.then(primeiro => {
  console.log(primeiro)
})
console.log(carregouPrimeiro); //Login efetuado