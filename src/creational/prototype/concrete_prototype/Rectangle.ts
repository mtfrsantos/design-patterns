import Shape from "../prototype/Shape";

export default class Rectangle implements Shape {
    constructor(readonly width: number, readonly height: number) {
        if (this.width <= 0) throw new Error("Width must be greater than 0");
        if (this.height <= 0) throw new Error("Height must be greater than 0");
    }
    clone(): Shape {
        return new Rectangle(this.width, this.height);
    }
}
