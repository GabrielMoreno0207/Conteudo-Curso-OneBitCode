type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string
    coordinates: PlanetCoordinates
    situation: PlanetSituation
    satelites: string[]
}

const planets: Planet[] = []

function addPlanet(name:string, coordinates:PlanetCoordinates, situation:PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satelites:[]
    })
    alert(`O planeta ${name} foi registrado com sucesso.`)
}

function findPlanet(name:string) {
    const planet = planets.find(planet => planet.name === name)

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)

}

function addSatelite(name:string, planet:Planet) {
    planet.satelites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)

}

function removeSatelite(name:string, planet: Planet) {
    planet.satelites = planet.satelites.filter(satellite => satellite !== name)

    alert(`O satelite ${name} foi removido do planeta ${planet.name}.`)
}

function promptValidSituation() {
    let situation: PlanetSituation
    let validSituation = false

    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta:\n1 = Habitado\n2 - Habitável\n3 - Inavitável\n4 - Inexplorado")
    
        switch (situationInput) {
            case "1":
                situation = "Habitado"
                validSituation = true
                break;
            case "2":
                situation = "Habitável"
                validSituation = true
                break;
            case "3":
                situation = "Inabitável"
                validSituation = true
                break;
            case "4":
                situation = "Inexplorado"
                validSituation = true
                break;
            
            default:
                alert("situação invalida!")
                break;
        }
    }
    return situation
}

function promptValidPlanet(callback:(planet:Planet) => void) {
    const planetName = prompt("Informe o nome do planeta: ")
    const planet = findPlanet(planetName)

    if (planet) {
        callback(planet)
    }else{
        
    }
}

