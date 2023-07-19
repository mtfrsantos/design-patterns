import RoundShape from "../client_interface/RoundShape";
import SquarePeg from "../service/SquarePeg";

export default class SquarePegToRoundPegAdapter implements RoundShape {
    constructor(private squarePeg: SquarePeg) {}
    getRadius(): number {
        return this.squarePeg.getWidth() * (Math.sqrt(2) / 2);
    }
}
