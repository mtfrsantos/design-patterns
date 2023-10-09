export default class UpdateSpy {
    private callCount = 0;
    incrementCallCount() {
        this.callCount++;
    }
    getCallCount() {
        return this.callCount;
    }
}
