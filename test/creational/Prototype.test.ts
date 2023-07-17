import Application from "../../src/creational/prototype/client/Application";
import Circle from "../../src/creational/prototype/concrete_prototype/Circle";
import Rectangle from "../../src/creational/prototype/concrete_prototype/Rectangle";

test("Should return copies of shapes", function () {
    const circle = new Circle(10);
    const rectangle = new Rectangle(10, 20);
    const application = new Application();
    application.addShape(circle);
    application.addShape(rectangle);
    expect(application.getShapes()).toEqual(application.getCopyOfShapes());
});
