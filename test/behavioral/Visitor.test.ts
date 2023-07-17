import Application from "../../src/behavioral/visitor/Application";
import Circle from "../../src/behavioral/visitor/Circle";
import Dot from "../../src/behavioral/visitor/Dot";
import JsonExportVisitor from "../../src/behavioral/visitor/JsonExportVisitor";
import Rectangle from "../../src/behavioral/visitor/Rectangle";

test("Should return a JSON with characteristics of the objects", function () {
    const shapes = [
        new Dot(0, 0),
        new Circle(0, 2, 1),
        new Rectangle(3, 2, 5, 8),
    ];
    const visitor = new JsonExportVisitor();
    const application = new Application(shapes, visitor);
    const jsonDataShapes = application.export();
    expect(jsonDataShapes).toEqual([
        {
            dot: {
                coordinates: [0, 0],
            },
        },
        {
            circle: {
                centerCoordinates: [0, 2],
                radius: 1,
            },
        },
        {
            rectangle: {
                leftTopSideCoordinates: [3, 2],
                height: 5,
                length: 8,
            },
        },
    ]);
});
