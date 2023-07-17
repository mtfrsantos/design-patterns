import Shape from "../prototype/Shape";

export default class Application {
    private shapes: Shape[] = [];
    addShape(shape: Shape): void {
        this.shapes.push(shape);
    }
    getShapes(): Shape[] {
        return this.shapes;
    }
    getCopyOfShapes(): Shape[] {
        return this.shapes.map((shape) => shape.clone());
    }
}
