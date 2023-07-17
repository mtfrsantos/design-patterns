import EventMessage from "./EventMessage";

export default interface EventListener {
    update(eventMessage: EventMessage): void;
}
