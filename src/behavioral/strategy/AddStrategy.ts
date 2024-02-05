import Strategy from "./strategy/Strategy";

export default class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}
