import Chair from "../abstract_products/Chair";
import CoffeeTable from "../abstract_products/CoffeeTable";
import FurnitureFactory from "../abstract_factory/FurnitureFactory";
import ModernChair from "../concrete_products/ModernChair";
import ModernCoffeeTable from "../concrete_products/ModernCoffeeTable";
import ModernSofa from "../concrete_products/ModernSofa";
import Sofa from "../abstract_products/Sofa";

export default class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }
    createCoffeeTable(): CoffeeTable {
        return new ModernCoffeeTable();
    }
    createSofa(): Sofa {
        return new ModernSofa();
    }
}
