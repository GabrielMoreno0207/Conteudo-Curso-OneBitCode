const array = [
    "1º Nivel",
    ["2º Nivel", 42, true],
    [
        ["3º nivel, 1º item", "Ola, mundo!"],
        ["3º nivel, 2º item", "Ola, mundo!"],
    ],
    []
]
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[1][0])
console.log(array[1][1])
console.log(array[2])
console.log(array[2][1])
console.log(array[2][1][0])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)