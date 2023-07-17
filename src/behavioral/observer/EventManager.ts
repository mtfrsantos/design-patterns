import EventType from "./EventType";
import EventListener from "./EventListener";
import EventMessage from "./EventMessage";

export default class EventManager {
    private listeners = new Map<EventType, EventListener[]>();
    constructor() {
        this.listeners.set("log", []);
        this.listeners.set("queue", []);
        this.listeners.set("email", []);
    }
    subscribe(eventType: EventType, listener: EventListener) {
        if (this.listeners.get(eventType)!.includes(listener)) {
            throw new Error(`${listener} is already subscribed`);
        }
        this.listeners.get(eventType)!.push(listener);
    }
    unsubscribe(eventType: EventType, subscriber: EventListener) {
        this.listeners
            .get(eventType)!
            .splice(this.listeners.get(eventType)!.indexOf(subscriber), 1);
    }
    notify(eventType: EventType, eventMessage: EventMessage) {
        this.listeners.get(eventType)!.forEach((listener) => {
            listener.update(eventMessage);
        });
    }
}
