// Concrete mediator
import GetAllUsersQuery from "./GetAllUsersQuery";
import GetUserByIdQuery from "./GetUserByIdQuery";
import Query from "./Query";
import QueryHandler from "./QueryHandler";

export default class ConcreteQueryHandler implements QueryHandler {
    execute(query: Query): string {
        if (query instanceof GetAllUsersQuery) {
            return `GetAllUsersQuery: ${query.statement}`;
        }
        if (query instanceof GetUserByIdQuery) {
            return `GetUserByIdQuery: ${query.statement}`;
        }
        throw new Error("Unknown query");
    }
}
