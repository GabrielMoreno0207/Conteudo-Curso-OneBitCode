const baralho = []
let option = ""

do {
    option = prompt(
        "Cartas no baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )   

    switch (option) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const puxarCarta = baralho.pop()
            if (!puxarCarta) {
                alert("Não possui nenhuma carta no baralho!")
            } else {
                alert("Voce puxou um(a) " + puxarCarta)
            }
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção invalida!")
    }

}while (option !== "3")