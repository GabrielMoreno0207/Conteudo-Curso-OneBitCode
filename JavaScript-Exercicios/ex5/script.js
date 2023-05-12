let dobraContagem = 0
let option = ""

let NaveName = prompt('Informe o nome da nave:')

option = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while (option == "1") {
    dobraContagem += 1
    option = prompt("Deseja realizar a proxima dobra espacial?\n1- Sim\n2- Não")
}

alert("Nave: " + NaveName + "\nQuantidade de dobras: " +dobraContagem)