import Strategy from "./Strategy";

export default class Context {
    private strategy?: Strategy;
    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }
    executeStrategy(a: number, b: number): number {
        if (!this.strategy) {
            throw new Error("Strategy not set");
        }
        return this.strategy.execute(a, b);
    }
}
