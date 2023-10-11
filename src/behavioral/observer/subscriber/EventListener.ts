import EventMessage from "../publisher/EventMessage";

export default interface EventListener {
    update(eventMessage: EventMessage): void;
}
