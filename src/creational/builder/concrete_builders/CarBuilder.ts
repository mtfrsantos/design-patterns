import Builder from "../builder/Builder";
import Car from "../products/Car";
import Engine from "../builder/Engine";

export default class CarBuilder implements Builder {
    private car?: Car;
    constructor() {
        this.reset();
    }
    reset(): void {
        this.car = new Car();
    }
    setSeats(seats: number): void {
        this.car!.seats = seats;
    }
    setEngine(engine: Engine): void {
        this.car!.engine = engine;
    }
    setOnBoardComputer(value: boolean): void {
        this.car!.onBoardComputer = value;
    }
    setGPS(value: boolean): void {
        this.car!.gps = value;
    }
    getResult(): Car {
        return this.car!;
    }
}
