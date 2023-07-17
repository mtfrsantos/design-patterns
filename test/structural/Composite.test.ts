import ConcreteProduct from "../../src/structural/composite/ConcreteProduct";
import ProductBox from "../../src/structural/composite/ProductBox";

test("Should return the price of all products in the box", function () {
    const hammer = new ConcreteProduct("hammer", 40);
    const phone = new ConcreteProduct("phone", 2000);
    const headphone = new ConcreteProduct("Headphone", 300);
    const phoneCharger = new ConcreteProduct("phoneCharger", 100);
    const box1 = new ProductBox();
    box1.add(hammer);
    const box2 = new ProductBox();
    box2.add(phone);
    box2.add(headphone);
    const box3 = new ProductBox();
    box3.add(phoneCharger);
    const largeBox = new ProductBox();
    largeBox.add(box1);
    largeBox.add(box2);
    largeBox.add(box3);
    expect(largeBox.getPrice()).toEqual(2440);
});
