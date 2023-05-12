const veiculo1 = prompt("Insira a marca do veiculo 1: ")
const velVeiculo1 = prompt("insira a velocidade do veiculo 1: ")

const veiculo2 = prompt("Insira a marca do veiculo 2: ")
const velVeiculo2 = prompt("insira a velocidade do veiculo 2: ")

if (velVeiculo1 > velVeiculo2) {
    alert("O veiculo 1 da marca " + veiculo1 +
    "\n tem a velocidade de  " + velVeiculo1 +
        "\n sendo o mais rapido!")
}
else if (velVeiculo2 > velVeiculo1) {
    alert("O veiculo 2 da marca " + veiculo2 +
    "\n tem a velocidade de  " + velVeiculo2 +
        "\n sendo o mais rapido!")
}
else {
    alert("Ambos os carros tem a mesma velocidade")
}