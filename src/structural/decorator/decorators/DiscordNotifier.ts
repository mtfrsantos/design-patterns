import Notifier from "../component/Notifier";

export default class DiscordNotifier implements Notifier {
    constructor(private inner: Notifier) {}
    send(): string {
        const lastNotification = this.inner.send();
        return `Discord notification\n${lastNotification}`;
    }
}
