import LogMessage from "./LogMessage";
import EventListener from "./subscriber/EventListener";
import UpdateSpy from "./UpdateSpy";

export default class LogEventListener implements EventListener {
    constructor(readonly updateCallSpy: UpdateSpy) {}
    update(message: LogMessage) {
        this.updateCallSpy.incrementCallCount();
    }
}
