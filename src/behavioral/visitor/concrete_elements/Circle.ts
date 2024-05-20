import Shape from "./Shape";
import Visitor from "./Visitor";

export default class Circle implements Shape {
    constructor(
        readonly centerCoordinateX: number,
        readonly centerCoordinateY: number,
        readonly radius: number
    ) {}
    accept(visitor: Visitor): any {
        return visitor.visitCircle(this);
    }
}
