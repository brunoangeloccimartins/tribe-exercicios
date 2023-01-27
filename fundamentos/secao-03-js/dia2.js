// exercícios

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let lista = 0; lista < groceryList.length; lista += 1) {
    console.log(groceryList[lista])
} */

// exercício

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let nomes of names) {
//     console.log(nomes)
// }

//exercício

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) [
//     console.log(numbers[index])
// ]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
//     console.log()
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
//     media = sum / numbers.length
//     console.log(media)
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
//     media = sum / numbers.length
//     if (media > 20) {
//         console.log(media + ' é maior que 20')
//     } 
//      else {
//         console.log(media + ' é menor que 20 ou igual a 20')
//     }
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = 0;
// for (let index = 0; index < numbers.length; index +=1) {
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index]
//     } else {
//         maiorNumero = maiorNumero
//     }
// }

// console.log(maiorNumero)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numerosOdd = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if ((numbers[index] % 2) !== 0 ) {
//         numerosOdd +=1
//     } else if (numerosOdd === 0) {
//         console.log('Não existe número ímpar')
//     }
// }
// console.log(numerosOdd);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorNumero = numbers[0];

// for (let index = 0; index < numbers.length; index +=1) {

//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index]
//     } 
// }
//     console.log(menorNumero)

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// let divisao = 0;
// for (let index = 0; index < numbers.length; index +=1)
//     console.log(numbers[index]/2)

// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let num = 0 ;
// for (let index = 1; index <= 50; index +=1) {
//     num = num +index;
// }
// console.log(num)

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let numeros = 0;

// for (let index = 2; index <= 150; index +=1) {
//     if (index % 3 ===0) {
//     numeros +=1
// } 
// }

// if (numeros === 50) {
//     console.log('Mensagem secreta')
// }

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


let idade = Math.floor(Math.random() *30);

console.log(idade)
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade')