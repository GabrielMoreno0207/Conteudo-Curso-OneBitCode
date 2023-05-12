function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const numero = document.getElementById('numero').value

    const confirmation = confirm("Escalar " + name + " como " + position + "?")

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + numero
        playerItem.innerText = position +": " + name + "(" + numero + ")"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ""
        document.getElementById('name').value = ""
        document.getElementById('numero').value = ""
    }
}

function RemPlayer() {
    const numero = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + numero)

    const confirmation = confirm('Remover o jogador' + playerToRemove.innerText + '?')

    if (confirmation) {
        playerToRemove.remove()
        document.getElementById('numberToRemove').value
        alert('Jogador removido!')
    }
}