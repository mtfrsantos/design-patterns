import EmailMessage from "./EmailMessage";
import EventListener from "./EventListener";
import LogMessage from "./LogMessage";
import UpdateCallSpy from "./UpdateCallSpy";

export default class EmailEventListener implements EventListener {
    constructor(
        readonly updateCallSpy: UpdateCallSpy | undefined = undefined
    ) {}
    update(message: LogMessage | EmailMessage) {
        if (message instanceof EmailMessage) {
            this.updateCallSpy?.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "error") {
            this.updateCallSpy?.incrementCallCount();
        }
        if (message instanceof LogMessage && message.level === "warning") {
            this.updateCallSpy?.incrementCallCount();
        }
    }
}
