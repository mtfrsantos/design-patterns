import EventMessage from "./publisher/EventMessage";

export default class LogMessage implements EventMessage {
    constructor(
        readonly level: string,
        readonly message: string,
        readonly method: string,
        readonly className: string
    ) {}
}
