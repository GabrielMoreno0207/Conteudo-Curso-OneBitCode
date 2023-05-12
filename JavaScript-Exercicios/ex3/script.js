let nomePiloto = prompt('Diga seu nome:')
let velocidade = 0

let novaVelocidade = prompt('A que velocidade voce gostaria de acelerar?')

let confirmVelocidade = confirm("estamos acelerando para " + novaVelocidade + "km/s")

if (novaVelocidade < 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (novaVelocidade < 40 ) {
    alert("Voce está devagar, podemos aumentar mais")
} else if(novaVelocidade >= 40 && novaVelocidade <=60){
    alert("Parece uma boa velocidade para manter")
} else if (novaVelocidade >= 80 && novaVelocidade <= 100) {
    alert("Velocidade alta. Considere diminuir")
} else if (novaVelocidade >= 100) {
    alert("Velocidade perigosa. Controle automático forçado")
} else {
    alert("NAVE SOFREU DANOS NA COLISÃO")
}

alert( nomePiloto + " sua Velocidade final foi de: " + novaVelocidade + "km/s")
