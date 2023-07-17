import EmailMessage from "./EmailMessage";
import LogMessage from "./LogMessage";
import QueueMessage from "./QueueMessage";

export default class EventMessageFactory {
    createLogMessage(
        level: string,
        message: string,
        method: string,
        className: string
    ) {
        return new LogMessage(level, message, method, className);
    }
    createQueueMessage(message: string) {
        return new QueueMessage(message);
    }
    createEmailMessage(message: string) {
        return new EmailMessage(message);
    }
}
