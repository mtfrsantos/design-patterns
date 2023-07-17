import EventListener from "./EventListener";
import LogMessage from "./LogMessage";
import QueueMessage from "./QueueMessage";
import UpdateCallSpy from "./UpdateCallSpy";

export default class QueueEventListener implements EventListener {
    constructor(
        readonly updateCallSpy: UpdateCallSpy | undefined = undefined
    ) {}
    update(message: LogMessage | QueueMessage) {
        if (message instanceof QueueMessage) {
            this.updateCallSpy?.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "error") {
            this.updateCallSpy?.incrementCallCount();
        }
    }
}
