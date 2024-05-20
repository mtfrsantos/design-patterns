import Circle from "./Circle";
import Dot from "./Dot";
import Rectangle from "./Rectangle";
import Visitor from "./Visitor";

export default class JsonExportVisitor implements Visitor {
    visitDot(dot: Dot): any {
        return { dot: { coordinates: [dot.coordinateX, dot.CoordinateY] } };
    }
    visitCircle(circle: Circle): any {
        return {
            circle: {
                centerCoordinates: [
                    circle.centerCoordinateX,
                    circle.centerCoordinateY,
                ],
                radius: circle.radius,
            },
        };
    }
    visitRectangle(rectangle: Rectangle) {
        return {
            rectangle: {
                leftTopSideCoordinates: [
                    rectangle.leftTopSideCoordinateX,
                    rectangle.leftTopSideCoordinateY,
                ],
                height: rectangle.height,
                length: rectangle.length,
            },
        };
    }
}
