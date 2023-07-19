import RoundShape from "../client_interface/RoundShape";

export default class RoundHole {
    constructor(readonly radius: number) {
        if (this.radius <= 0) throw new Error("Radius must be greater than 0");
    }
    checkFitsHole(peg: RoundShape): boolean {
        return this.radius >= peg.getRadius();
    }
}
