import Shape from "../element/Shape";
import Visitor from "../visitor/Visitor";

export default class Dot implements Shape {
    constructor(readonly coordinateX: number, readonly CoordinateY: number) {}
    accept(visitor: Visitor): any {
        return visitor.visitDot(this);
    }
}

