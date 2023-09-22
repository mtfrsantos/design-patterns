// Mediator
import Query from "../components/Query";

export default interface QueryHandler {
    execute(query: Query): string;
}
