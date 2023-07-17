import CoffeeTable from "../abstract_products/CoffeeTable";

export default class ModernCoffeeTable implements CoffeeTable {
    describeCoffeeTable(): string {
        return "Modern Coffee Table";
    }
}
