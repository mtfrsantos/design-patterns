import RoundShape from "../client_interface/RoundShape";

export default class RoundHole implements RoundShape {
    constructor(private radius: number) {
        if (this.radius <= 0) throw new Error("Radius must be greater than 0");
    }
    getRadius(): number {
        return this.radius;
    }
    fits(peg: RoundShape): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}
