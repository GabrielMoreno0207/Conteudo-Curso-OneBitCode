const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satelites: []
    });
    alert(`O planeta ${name} foi registrado com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
}
function addSatelite(name, planet) {
    planet.satelites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`);
}
function removeSatelite(name, planet) {
    planet.satelites = planet.satelites.filter(satellite => satellite !== name);
    alert(`O satelite ${name} foi removido do planeta ${planet.name}.`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta:\n1 = Habitado\n2 - Habitável\n3 - Inavitável\n4 - Inexplorado");
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("situação invalida!");
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callback) {
    const planetName = prompt("Informe o nome do planeta: ");
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
    }
}
