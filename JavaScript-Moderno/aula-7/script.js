const average = (...numbers) => {
    const soma = numbers.reduce((accum, num) => accum + num, 0)
    return soma = numbers.length
}
 
console.log(`media Aritimética Simples: ${average(3, 6, 10, 9)}`)

const mediaPonderadaAverage = (...entrada) => {
    const soma = entrada.reduce((accum, { number, weight }) => accum + (number * weight ?? 1), 0)
    const weightSoma = entrada.reduce((accum, entrar) => accum + (entrar.weight ?? 1), 0)
    return soma / weightSoma
}

console.log(`Média Ponderada: ${mediaPonderadaAverage(
    { number: 9, weight: 3},
    { number: 7 },
    { number: 10, weight: 1},
)}`)

const mediana = (...numbers ) => {
    const numerosOrdenados = [...numbers].sort((a, b) => a - b)
    const meio = math.floor(numerosOrdenados.length / 2)
    if (numerosOrdenados.length % 2 !== 0) {
        return numerosOrdenados[meio]
    }
    const primeiraMediana = numerosOrdenados[meio - 1]
    const segundaMediana = numerosOrdenados[meio]
    return average(primeiraMediana, segundaMediana)
}

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
    const quantidades = numbers.map(num => {
        num,
        numbers.filter(n => num === n).length
    })
    quantidades.sort((a, b) => b[1] - a[1])
    return quantidades[0][0]
}

console.log(`Moda: ${moda(1, 1, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)