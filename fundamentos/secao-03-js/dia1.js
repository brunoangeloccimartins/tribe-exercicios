/* const myName = 'Bruno';
const birthCity = 'Piracicaba';
let birthYear = 2000;

 //exercício

birthYear = 2030;
birthCity = 'São Paulo'; */


// O erro aparece pq birthCity é uma constante, ou seja, seu valor não pode ser alterado.

/* console.log(myName);
console.log(birthCity);
console.log(birthYear); */

// exercício

/* const base = 5;
const height = 8;
const area = base * height;
const perimeter = (2 * base) + (2 * height);

console.log(area);
console.log(perimeter); */

// exercício

/* const nota = 87;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovado(a)!!!')
} else if (nota >= 60 && nota < 80) {
    console.log('Você está na lista de espera.')
}
else {
    console.log('Infelizmente, você reprovou.')
} */

//exercício

/* const currentHour = 17;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, hora de dormir!'
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D'
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
} else if (currentHour >= 10 && currentHour < 14) {
    message = 'Hora do almoço!!'
} else {
    message = 'Hmmmm, cheirinho de café recém passado.'
}

console.log(message) */


//exercício

/* let status = 'reprovada'

switch (status) {
    case 'reprovada':
    console.log('Você foi reprovado(a)')
    break;
    case 'lista':
    console.log('Você está na lista de espera')
    break;
    case 'aprovada':
    console.log('Parabéns você foi aprovado(a)!!!')
}  */

// exercícios- agora, a prática

// let a = 17;
// let b = 10;

// let soma = a + b;
// let sub = a - b;
// let mult = a * b;
// let div = a / b;
// let rest = a % b;

// console.log (soma, sub, mult, div, rest)

// let a = 17;
// let b = 10;
// let resultado = null;

// if (a > b) {
//     resultado = 'a é a maior'
// } else if (b < a) {
//     resultado = 'b é a maior'
// } else {
//     resultado = ',nenhuma varíavel é a maior'
// }

// console.log('a varíavel ' + resultado)
    

// let number = 0;
// let resultado = null;

// if (number > 0) {
//     resultado = 'positive'
// } else if (number < 0 ) {
//     resultado = 'negative'
// } else {
//     resultado = 'zero'
// }

// console.log(resultado)


// const a = 90;
// const b = -50;
// const c = -30;
// let resultado;

// if (a + b + c === 180) {
//     resultado = true
// } else if (a + b + c < 180) {
//     resultado = false
// } else {
//     resultado = false
// }

//     if (resultado === false && a < 0 && b < 0 && c < 0) {
//         console.log('Um ângulo será considerado inválido se não tiver um valor positivo.')
//     } else if (resultado === false) {
//         console.log('Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.')
//     } else {
//         console.log('Os valores representam ângulos internos de um triângulo.')
//     }