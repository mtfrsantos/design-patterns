import Shape from "./Shape";
import Visitor from "./Visitor";

export default class Dot implements Shape {
    constructor(readonly coordinateX: number, readonly CoordinateY: number) {}
    accept(visitor: Visitor): any {
        return visitor.visitDot(this);
    }
}
