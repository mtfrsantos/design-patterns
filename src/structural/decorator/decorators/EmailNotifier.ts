import Notifier from "../component/Notifier";

export default class EmailNotifier implements Notifier {
    constructor(private inner: Notifier) {}
    send(): string {
        const lastNotification = this.inner.send();
        return `Email notification\n${lastNotification}`;
    }
}
