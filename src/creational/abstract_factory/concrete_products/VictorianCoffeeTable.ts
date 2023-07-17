import CoffeeTable from "../abstract_products/CoffeeTable";

export default class VictorianCoffeeTable implements CoffeeTable {
    describeCoffeeTable(): string {
        return "Victorian Coffee Table";
    }
}
