const nomeTurista = prompt("Informe seu nome: ")
let cidades = ""
let contagem = 0

let continuar = prompt("Voce visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")

    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Voce visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + nomeTurista +
    "\nQuantidades de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)
