function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}
// dobro(6)

function dizerOla(nome) {
    alert("Ola, " + nome + "!")
}
// dizerOla(Gabriel)
// dizerOla()

function soma(a,b) {
    alert("O resultado da soma é " + (a+b))
}

// soma(3,9)

function criarUsuario(nome, email, senha, tipo = "adm") {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo

    }
    console.log(usuario)
}
criarUsuario("Gabriel", "gabriel@gmail.com", "1234")