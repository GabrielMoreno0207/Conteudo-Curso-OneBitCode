class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login realizado com sucesso! " )
        } else {
            console.log("Falha no login!")
        }
    }
}

const Gabriel = new User("Gabriel", "gabrielmfrontend@hotmail.com", "0207bielGM")

Gabriel.login("gabrielmfrontend@hotmail.com", "0207bielGM")
console.log(Gabriel)