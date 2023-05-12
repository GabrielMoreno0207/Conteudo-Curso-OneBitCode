const Author = require("./Author");

const gabriel = new Author("Gabriel Moreno")

const post = gabriel.writePost("Titulo do post", "Lorem ipsum dolar sic...")

post.addComment("Joãozinho", "Show de bola")
post.addComment("Eduardo", "muito bom")

console.log(gabriel)
console.log(post)