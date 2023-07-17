import Notifier from "./Notifier";

export default class BasicNotifier implements Notifier {
    send(): string {
        return "Basic notification";
    }
}
