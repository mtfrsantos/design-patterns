import EventListener from "./subscriber/EventListener";
import LogMessage from "./LogMessage";
import QueueMessage from "./QueueMessage";
import UpdateSpy from "./UpdateSpy";

export default class QueueEventListener implements EventListener {
    constructor(readonly updateCallSpy: UpdateSpy) {}
    update(message: LogMessage | QueueMessage) {
        if (message instanceof QueueMessage) {
            this.updateCallSpy.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "error") {
            this.updateCallSpy.incrementCallCount();
        }
    }
}
