export default class SquarePeg {
    constructor(private width: number) {
        if (this.width <= 0) throw new Error("Width must be greater than 0");
    }
    getWidth(): number {
        return this.width;
    }
}
