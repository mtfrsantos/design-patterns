import EventListener from "../subscriber/EventListener";
import LogMessage from "../LogMessage";
import QueueMessage from "../QueueMessage";
import UpdateSpy from "../UpdateSpy";

export default class QueueEventListener implements EventListener {
    constructor(readonly updateSpy: UpdateSpy) {}
    update(message: LogMessage | QueueMessage): void {
        if (message instanceof QueueMessage) {
            this.updateSpy.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "error") {
            this.updateSpy.incrementCallCount();
        }
    }
}
