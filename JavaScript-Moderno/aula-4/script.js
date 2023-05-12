function soma(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}
console.log(soma(1, 1))
console.log(soma(2, 2, 2, 2, 2))