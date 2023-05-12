const Pnome = prompt("Informe o primeiro nome do recruta: ")
const Snome = prompt("Informe o segundo nome do recruta: ")
const FieldStudy = prompt("Qual o campo de estudo do recruta? ")
const AnoNascimento = prompt("Qual o ano de nascimento do recruta? ")

alert(
    "\nRecruta cadastrado com sucesso!\n" +
    "\nNome completo: " + Pnome + " " + Snome +
    "\nCampo de estudo: " + FieldStudy +
    "\nIdade: " + (2022 - AnoNascimento) + " anos"
)