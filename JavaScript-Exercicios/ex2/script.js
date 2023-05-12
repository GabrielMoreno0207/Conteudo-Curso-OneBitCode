let nomePessoa1 = prompt('Informe o nome da pessoa 1:')
let idadePessoa1 = prompt('Informe a idade da pessoa 1:')
let nomePessoa2 = prompt('Informe o nome da pessoa 2:')
let idadePessoa2 = prompt('Informe a idade da pessoa 2:')

if (idadePessoa1 > idadePessoa2) {
    let difIdade = idadePessoa1-idadePessoa2
    alert(nomePessoa1 +" é mais velho, com a diferença de " + difIdade +" ano(s)" )
} else if (idadePessoa2 > idadePessoa1) {
    let difIdade = idadePessoa2-idadePessoa1
    alert(nomePessoa2 +" é mais velho, com a diferença de " + difIdade +" ano(s)" )
}

