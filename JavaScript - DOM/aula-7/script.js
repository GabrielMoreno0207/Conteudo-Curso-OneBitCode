function register() {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removerListener() {
    button.removeEventListener('click', register)
    alert('Event removed')
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})