class Account{
    #password
    #balance = 0

    constructor(user) {
        this.email = user.email
        this.password = user.password
        
    }

    getBalance(email, password) {
        if (this.#authenticate) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "gabrielm@hotmail.com",
    password: "12345"
}

const myAccount = new Account(user)

console.log(myAccount).getBalance("gabrielm@hotmail.com", "12345")