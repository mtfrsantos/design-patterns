import Circle from "./Circle";
import Dot from "./Dot";
import Rectangle from "./Rectangle";

export default interface Visitor {
    visitDot(dot: Dot): any;
    visitCircle(circle: Circle): any;
    visitRectangle(rectangle: Rectangle): any;
}
