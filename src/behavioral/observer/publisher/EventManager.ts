import EventType from "../EventType";
import EventListener from "../subscriber/EventListener";
import EventMessage from "../EventMessage";

export default class EventManager {
    private listeners: Record<EventType, EventListener[]> = {
        log: [],
        queue: [],
        email: [],
    };
    subscribe(eventType: EventType, listener: EventListener) {
        if (this.listeners[eventType].includes(listener)) {
            throw new Error(`Listener is already subscribed`);
        }
        this.listeners[eventType].push(listener);
    }
    unsubscribe(eventType: EventType, subscriber: EventListener) {
        this.listeners[eventType].splice(
            this.listeners[eventType].indexOf(subscriber),
            1
        );
    }
    notify(eventType: EventType, eventMessage: EventMessage) {
        this.listeners[eventType].forEach((listener) => {
            listener.update(eventMessage);
        });
    }
}
