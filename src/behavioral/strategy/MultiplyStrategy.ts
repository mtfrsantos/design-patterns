import Strategy from "./Strategy";

export default class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}
