import RoundShape from "../client_interface/RoundShape";

export default class RoundPeg implements RoundShape {
    constructor(private radius: number) {
        if (this.radius <= 0) throw new Error("Radius must be greater than 0");
    }
    getRadius(): number {
        return this.radius;
    }
}
