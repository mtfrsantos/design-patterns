import Chair from "../abstract_products/Chair";
import CoffeeTable from "../abstract_products/CoffeeTable";
import FurnitureFactory from "../abstract_factory/FurnitureFactory";
import Sofa from "../abstract_products/Sofa";
import VictorianChair from "../concrete_products/VictorianChair";
import VictorianCoffeeTable from "../concrete_products/VictorianCoffeeTable";
import VictorianSofa from "../concrete_products/VictorianSofa";

export default class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }
    createCoffeeTable(): CoffeeTable {
        return new VictorianCoffeeTable();
    }
    createSofa(): Sofa {
        return new VictorianSofa();
    }
}
