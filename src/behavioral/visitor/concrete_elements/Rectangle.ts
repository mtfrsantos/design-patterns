import Shape from "./Shape";
import Visitor from "./Visitor";

export default class Rectangle implements Shape {
    constructor(
        readonly leftTopSideCoordinateX: number,
        readonly leftTopSideCoordinateY: number,
        readonly height: number,
        readonly length: number
    ) {}
    accept(visitor: Visitor): any {
        return visitor.visitRectangle(this);
    }
}
