let nave = prompt("Digite o nome da nave:")

let caractere = prompt("Qual caractere deseja substituir?")
let caractereSubs = prompt("Por que caracter desejar substituir?")

let replaceName = ""

for (let pos = 0; pos < nave.length; pos++) {
    if (nave[pos] == caractere) {
        replaceName += caractereSubs
    } else {
        replaceName += nave[pos]
    }
}
alert("O Nome da nave ficou assim: " + replaceName)