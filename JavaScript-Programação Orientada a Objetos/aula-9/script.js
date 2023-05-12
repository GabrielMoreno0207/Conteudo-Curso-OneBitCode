class Veiculo{
    move() {
        console.log("Veiculo está se movendo.")
    }
}

class Carro extends Veiculo{
    move() {
        console.log("O carro esta se movendo.")
    }
}

class Navio extends Veiculo{
    move() {
        console.log("O navio eesta navegando.")
    }
}

class Aeronave extends Veiculo{
    move(speed) {
        console.log(`A aeronave está voando a ${speed} km/h.`)
    }
}

const delorean = new Carro()
const blackpearl = new Navio()
const maverick = new Aeronave()

// delorean.move()
// blackpearl.move()
// maverick.move(500)

function iniciar(veiculo) {
    console.log("Iniciando um veiculo...")
    veiculo.move()
}

iniciar(delorean)
iniciar(blackpearl)
iniciar(maverick)
