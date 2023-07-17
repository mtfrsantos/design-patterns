import Chair from "../abstract_products/Chair";
import CoffeeTable from "../abstract_products/CoffeeTable";
import Sofa from "../abstract_products/Sofa";

export default interface FurnitureFactory {
    createChair(): Chair;
    createCoffeeTable(): CoffeeTable;
    createSofa(): Sofa;
}
