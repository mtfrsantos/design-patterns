import Builder from "../builder/Builder";
import Engine from "../builder/Engine";
import Manual from "../products/Manual";

export default class ManualBuilder implements Builder {
    private manual?: Manual;
    constructor() {
        this.reset();
    }
    reset(): void {
        this.manual = new Manual();
    }
    setSeats(seats: number): void {
        this.manual!.seats = seats;
    }
    setEngine(engine: Engine): void {
        this.manual!.engine = engine;
    }
    setOnBoardComputer(value: boolean): void {
        this.manual!.onBoardComputer = value;
    }
    setGPS(value: boolean): void {
        this.manual!.gps = value;
    }
    getResult(): Manual {
        return this.manual!;
    }
}
