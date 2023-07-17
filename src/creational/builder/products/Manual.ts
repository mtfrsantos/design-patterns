import Engine from "../builder/Engine";

export default class Manual {
    seats: number = 2;
    engine: Engine = { speed: "Medium", torque: "Low" };
    onBoardComputer: boolean = false;
    gps: boolean = false;
}
