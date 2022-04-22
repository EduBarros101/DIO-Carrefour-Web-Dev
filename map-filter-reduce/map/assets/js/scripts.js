const arr1 = [1, 2]
const arr2 = [1, 2, 3, 4, 5]
const diceRolls = [2, 4, 6, 8]

const dwarvenHero = {
    strength: 9,
    dexterity: 5,
    trustworthy: true,
}

const humanHero = {
    strength: 6,
    dexterity: 6,
    trustworthy: false,
}

// - Atividades

// - Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

// Usando o argumento "this", ele deve ser passado par ao segundo argumento da função
function strMultWithThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.strength
    }, thisArg)
}

console.log(strMultWithThis(diceRolls, dwarvenHero))

// Sem o argumento "this" uma função deve ser aplicada sobre o array indicado em "item".
function mapWithoutThis(arr) {
    return arr.map(function (item) {
        return item * 2
    })
}

console.log(mapWithoutThis(arr2))

////////////////////////////////////////////////////////////////

// - Filter
// Filtre e retorne todos os números pares de um array.

function numerosPares(arr) {
    return arr / 2 === 0
}

////////////////////////////////////////////////////////////////

// - Reduce
// Some todos os números de um array
// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
