class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.InStock = 0
    }
    addToStock(quantity) {
        this.InStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }

}

const watch = new Product("Relógio de Pulso", "...", 80)
watch.addToStock(91)
const priceWithDiscount = watch.calculateDiscount(15)

console.log(watch)
console.log(priceWithDiscount)
