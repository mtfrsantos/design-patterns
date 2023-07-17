import Notifier from "./Notifier";

export default class PushNotifier implements Notifier {
    constructor(private inner: Notifier) {}
    send(): string {
        const lastNotification = this.inner.send();
        return `Push notification\n${lastNotification}`;
    }
}
