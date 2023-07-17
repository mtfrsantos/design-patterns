export default class UpdateCallSpy {
    private callCount = 0;
    incrementCallCount() {
        this.callCount++;
    }
    getCallCount() {
        return this.callCount;
    }
}
