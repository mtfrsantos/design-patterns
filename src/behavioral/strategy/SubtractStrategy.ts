import Strategy from "./strategy/Strategy";

export default class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}
