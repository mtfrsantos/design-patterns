import LogMessage from "../LogMessage";
import EventListener from "../subscriber/EventListener";
import UpdateSpy from "../UpdateSpy";

export default class LogEventListener implements EventListener {
    constructor(readonly updateSpy: UpdateSpy) {}
    update(message: LogMessage): void {
        this.updateSpy.incrementCallCount();
    }
}
