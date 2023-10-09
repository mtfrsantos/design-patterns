import EmailMessage from "./EmailMessage";
import EventListener from "./EventListener";
import LogMessage from "./LogMessage";
import UpdateSpy from "./UpdateSpy";

export default class EmailEventListener implements EventListener {
    update(message: LogMessage | EmailMessage) {
    constructor(readonly updateSpy: UpdateSpy) {}
        if (message instanceof EmailMessage) {
            this.updateSpy.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "error") {
            this.updateSpy.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "warning") {
            this.updateSpy.incrementCallCount();
        }
    }
}
