let a = 0

letb = a || 42

console.log({ a, b })

b = a ?? 42

console.log({ a, b })

let c = null ?? 42  

console.log({c})