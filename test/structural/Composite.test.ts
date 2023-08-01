import ConcreteProduct from "../../src/structural/composite/component/ConcreteProduct";
import ProductBox from "../../src/structural/composite/container/ProductBox";

test("Should return the price of all products in the box", function () {
    const hammer = new ConcreteProduct("hammer", 40);
    const phone = new ConcreteProduct("phone", 2000);
    const headphone = new ConcreteProduct("Headphone", 300);
    const phoneCharger = new ConcreteProduct("phoneCharger", 100);
    const smallBox = new ProductBox();
    smallBox.add(hammer);
    const mediumBox = new ProductBox();
    mediumBox.add(phone);
    mediumBox.add(headphone);
    mediumBox.add(smallBox);
    const bigBox = new ProductBox();
    bigBox.add(phoneCharger);
    bigBox.add(mediumBox);
    const largeBox = new ProductBox();
    largeBox.add(bigBox);
    expect(largeBox.getPrice()).toEqual(2440);
});
