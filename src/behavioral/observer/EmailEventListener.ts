import EmailMessage from "./EmailMessage";
import EventListener from "./EventListener";
import LogMessage from "./LogMessage";
import UpdateSpy from "./UpdateSpy";

export default class EmailEventListener implements EventListener {
    constructor(readonly updateSpy: UpdateSpy) {}
    update(message: LogMessage | EmailMessage): void {
        if (message instanceof EmailMessage) {
            this.updateSpy.incrementCallCount();
            return;
        }
        if (message instanceof LogMessage && message.level === "error") {
            this.updateSpy.incrementCallCount();
            return;
        }
        if (message instanceof LogMessage && message.level === "warning") {
            this.updateSpy.incrementCallCount();
        }
    }
}
