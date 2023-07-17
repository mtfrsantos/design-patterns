import Chair from "../abstract_products/Chair";
import CoffeeTable from "../abstract_products/CoffeeTable";
import FurnitureFactory from "../abstract_factory/FurnitureFactory";
import Sofa from "../abstract_products/Sofa";

export default class Client {
    constructor(readonly furnitureFactory: FurnitureFactory) {}
    getChair(): Chair {
        return this.furnitureFactory.createChair();
    }
    getCoffeeTable(): CoffeeTable {
        return this.furnitureFactory.createCoffeeTable();
    }
    getSofa(): Sofa {
        return this.furnitureFactory.createSofa();
    }
}
