const person = {
    nome: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padime"]
}

const name = person.name

const { nome, job, parents } = person

console.log(nome, parents, job)

const [father, mother] = parents 

console.log(father, mother)

function createUser({nome,job,parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        nome,
        job,
        parents

    }
}

const luke = createUser(person)
console.log(luke)