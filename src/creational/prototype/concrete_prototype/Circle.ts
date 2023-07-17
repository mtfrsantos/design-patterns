import Shape from "../prototype/Shape";

export default class Circle implements Shape {
    constructor(readonly radius: number) {
        if (this.radius <= 0) {
            throw new Error("Radius must be greater than 0");
        }
    }
    clone(): Shape {
        return new Circle(this.radius);
    }
}
