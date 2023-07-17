import Product from "./Product";

export default class ConcreteProduct implements Product {
    constructor(readonly name: string, private price: number) {}
    getPrice(): number {
        return this.price;
    }
}
