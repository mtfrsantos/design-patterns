import Circle from "../concrete_elements/Circle";
import Dot from "../concrete_elements/Dot";
import Rectangle from "../concrete_elements/Rectangle";

export default interface Visitor {
    visitDot(dot: Dot): any;
    visitCircle(circle: Circle): any;
    visitRectangle(rectangle: Rectangle): any;
}

