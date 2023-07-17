import Engine from "./Engine";

export default interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: Engine): void;
    setOnBoardComputer(value: boolean): void;
    setGPS(value: boolean): void;
    getResult(): any;
}
