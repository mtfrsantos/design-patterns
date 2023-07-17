import Client from "../../src/creational/abstract_factory/client/Client";
import ModernFurnitureFactory from "../../src/creational/abstract_factory/concrete_factories/ModernFurnitureFactory";
import VictorianFurnitureFactory from "../../src/creational/abstract_factory/concrete_factories/VictorianFurnitureFactory";

test("Should return modern furniture", function () {
    const furnitureFactory = new ModernFurnitureFactory();
    const client = new Client(furnitureFactory);
    const clientChair = client.getChair();
    const clientSofa = client.getSofa();
    const clientCoffeeTable = client.getCoffeeTable();
    expect(clientChair.describeChair()).toBe("Modern Chair");
    expect(clientSofa.describeSofa()).toBe("Modern Sofa");
    expect(clientCoffeeTable.describeCoffeeTable()).toBe("Modern Coffee Table");
});

test("Should return victorian furniture", function () {
    const furnitureFactory = new VictorianFurnitureFactory();
    const client = new Client(furnitureFactory);
    const clientChair = client.getChair();
    const clientSofa = client.getSofa();
    const clientCoffeeTable = client.getCoffeeTable();
    expect(clientChair.describeChair()).toBe("Victorian Chair");
    expect(clientSofa.describeSofa()).toBe("Victorian Sofa");
    expect(clientCoffeeTable.describeCoffeeTable()).toBe(
        "Victorian Coffee Table"
    );
});
