/*
1) Escreva um algoritmo (em qualquer linguagem) que resolva a seguinte questão:
Um professor citou as seguintes definições:
  1. Número esotérico é todo número inteiro divisível por 3 e 5
  2. Número cético é todo número inteiro que não é esotérico
  3. Número primo é todo número inteiro divisível somente por 1 e ele mesmo
Faça um algoritmo que dado um número inteiro descubra se ele é Esotérico, Cético e/ou Primo
*/

function numberType(number) {
  if (isNaN(number)) throw 'Necessary to past a number type!';
  number = Math.floor(number);
  function calcEsoteric(number) { return number % 3 === 0 && number % 5 === 0 };

  function calcPrime(number) {
    const params = [];
    for (let index = 2; index < number; index++) { params.push(index) };
    return number > 1 && !params.map(param => number % param).includes(0);
  };

  const isEsoteric = calcEsoteric(number);
  const isPrime = calcPrime(number);

  return `${number} é um número ${isEsoteric ? 'esotérico' : 'cético'}${isPrime ? ' e primo.' : '.'}`;
};

/* Teste com números aleatórios, sendo 5 inteiros e 5 reais, podendo ser positivo ou negativo */
[
  (Math.random() * 1024) - 256,
  (Math.random() * 1024) - 256,
  (Math.random() * 1024) - 256,
  (Math.random() * 1024) - 256,
  (Math.random() * 1024) - 256,
  Math.floor(Math.random() * 1024) - 256,
  Math.floor(Math.random() * 1024) - 256,
  Math.floor(Math.random() * 1024) - 256,
  Math.floor(Math.random() * 1024) - 256,
  Math.floor(Math.random() * 1024) - 256,
].map(randomNumber => console.log(numberType(randomNumber)));
