//function normal
function normalSum(a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)
//function anonima
const anonymousSum = function (a, b) {
    return a + b
}
console.log`Soma anonima: ${anonymousSum(2, 2)}`
//arrow function
const arrowSum = (a, b)  =>  {
    return a + b
}
console.log`Soma arrow function: ${arrowSum(2, 2)}`

//arrow function direta
const subtracao = (a, b) => a - b
console.log(`Subtração: ${subtracao(5, 2)}`)

//arrow function com um parametro
const double = n => `O dobro de ${n} é ${n + 2}`

//arrow function + arrays
const towns = ['Osvaldo Cruz', 'Parapua', 'Adamantina']

const comecaComP = towns.filter(town => town[0] === 'P')
console.log(comecaComP)