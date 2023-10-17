import LogMessage from "../LogMessage";
import EventListener from "../subscriber/EventListener";
import UpdateSpy from "../UpdateSpy";

export default class LogEventListener implements EventListener {
    update(message: LogMessage) {
    constructor(readonly updateSpy: UpdateSpy) {}
        this.updateSpy.incrementCallCount();
    }
}
