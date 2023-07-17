export default class Spy {
    private runCount: number = 0;
    execute(): void {
        this.runCount++;
    }
    getRunCount(): number {
        return this.runCount;
    }
}
