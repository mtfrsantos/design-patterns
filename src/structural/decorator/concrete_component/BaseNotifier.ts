import Notifier from "../component/Notifier";

export default class BaseNotifier implements Notifier {
    send(): string {
        return "Base notification";
    }
}
