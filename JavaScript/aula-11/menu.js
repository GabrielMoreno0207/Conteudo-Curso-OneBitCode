let option = ""

do {
    option = prompt(
        " Seja bem-vindo!" +
        "\nEscolha um das opções abaixo:" +
        "\n1. Option Um" +
        "\n2. Option Dois" +
        "\n3. Option Tres" +
        "\n4. Option Quatro" +
        "\n5. Encerrar" 
    )

    switch (option) {
        case "1":
            alert("Sua escolha foi Option 1")
            break
        case "2":
            alert("Sua escolha foi Option 2")
            break
        case "3":
            alert("Sua escolha foi Option 3")
            break
        case "4":
            alert("Sua escolha foi Option 4")
            break
        case "5":
            alert("Sua escolha foi Encerrar")
            alert("Encerrando...")
            break
        default:
            alert("Invalid Option")
    }

}while(option !== "5")