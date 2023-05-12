let saldo = prompt("Informe a quantidade de dinheiro inicial: ")
let option = ""

do {
    option = prompt(
        "Saldo disponivel: R$ " + saldo +
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair" 
    )

    switch (option) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
            break
        case "2":
            saldo -= prompt("Informe o valor a ser retirado:")
            break
        case "3":
            alert("Saindo...")
            break
    }

} while (option !== "3") {
    
}