// // exercício

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
    
// };

// // console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos.')

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo 6 vezes: ' + player['bestInTheWorld'])

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

// exercício

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let welcome in names) {
//     console.log('Olá ' + names[welcome])
//   }

// exercício

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let carro in car) {
//     console.log(carro + ' ' + car[carro])
//   }

// exercício

let a = Math.floor(Math.random () * 70) - 20;
let b = Math.floor(Math.random () * 70) - 20;
let c = Math.floor(Math.random () * 70) - 20;

function soma(a, b) {
    return a + b;
} console.log(soma(a, b))

function sub(a, b) {
    return a - b;
} console.log(sub(a, b))

function mult(a, b) {
    return a * b;
} console.log(mult(a, b))

function div(a, b) {
    return a / b;
} console.log(div(a, b))

function rest(a, b) {
    return a % b;
} console.log(rest(a, b))

function maior(a, b) {
    if (a > b) {
        return  a + ' é maior que ' + b
    } else {
        return b + ' é maior que ' + a
    }
    
} console.log (maior(a, b))

function maiorTres(a, b, c) {
    if (a > b && a > c) {
        return a + ' é maior que ' + b + ' e maior que ' + c
    } else if (b > a && b > c) {
        return b + ' é maior que ' + a + ' e maior que ' + c
    } else {
        return c + ' é maior que ' + a + ' e maior que ' + b
    }
}
console.log(maiorTres(a, b, c))

function posineg(a) {
    if (a > 0) {
        return  a + ' positive'
    } else if (a < 0) {
        return  a + ' negative'
    } else {
        return 'zero'
    }
} console.log(posineg(a))

function triang(a, b, c) {
    if (a + b + c === 180) {
        return true
    } else if (a < 0 || b < 0 || c < 0) {
        return 'error'
    } else {
        return false
    }
} console.log(triang(a, b, c))