const Address = require("./Address.js");
const Person = require("./Person.js");

const addr = new Address("Yutaka-abe", 725, "Centro", "Osvaldo Cruz", "SP")
const Gabriel = new Person("Gabriel Moreno", addr)

console.log(Gabriel)
console.log(Gabriel.address.fullAddress())
