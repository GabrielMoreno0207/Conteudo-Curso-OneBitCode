const user = {
    name: "John Doe",
    email: "doejohn@gmail.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998244817"
    }
}

console.log(user.friends[0].phone.ddd)//vai dar erro
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)