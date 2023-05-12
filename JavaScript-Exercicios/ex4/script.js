let distanciaAnosLuz = prompt('Informe a distancia em anos luz:')
let unidade
let convertDistancia

let options = prompt(
    "Para qual unidade deseja convertar?" +
    "\n1. Parsec(pc)" +
    "\n2. Unidade Astronomica" +
    "\n3. Quilometros(km)" 
)
switch (options) {
    case "1":
        unidade = "Parsec"
        convertDistancia = distanciaAnosLuz * 0.306601
        break;
    case "2":
        unidade = "Unidade Astronomica"
        convertDistancia = distanciaAnosLuz * 63241.1
        break;
    case "3":
        unidade = "Quilometros"
        convertDistancia = distanciaAnosLuz * 9.5 * Math.pow(10,12)
        break;
    default:
        alert("Ação invalida, por favor informe o numero da opção desejada!")
        break;
}

alert("Distancia em Anos luz: " + distanciaAnosLuz + "\n" + unidade + ": " + convertDistancia)