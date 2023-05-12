alert("Bem vindo! A seguir pediremos que informe alguns dados.")

let nome = prompt('Informe o seu nome: ')
let idade = prompt('Informe a sua idade: ')
let idadeConfirm = confirm("Sua idade é: " + idade + " anos")

alert(
    "O nome do usuario digitado é: " + nome +
    "\nA idade digitada é: " + idade + " anos" +
    "\nIdade confirmada: " + idade
)
