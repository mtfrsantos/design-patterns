import LogMessage from "./LogMessage";
import EventListener from "./EventListener";
import UpdateCallSpy from "./UpdateCallSpy";

export default class LogEventListener implements EventListener {
    constructor(
        readonly updateCallSpy: UpdateCallSpy | undefined = undefined
    ) {}
    update(message: LogMessage) {
        this.updateCallSpy?.incrementCallCount();
    }
}
