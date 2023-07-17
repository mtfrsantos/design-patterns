import Strategy from "./Strategy";

export default class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}
