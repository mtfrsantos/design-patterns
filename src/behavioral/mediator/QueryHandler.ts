// Mediator
import Query from "./Query";

export default interface QueryHandler {
    execute(query: Query): string;
}
