import GetAllUsersQuery from "../concrete_components/GetAllUsersQuery";
import GetUserByIdQuery from "../concrete_components/GetUserByIdQuery";
import Query from "../components/Query";
import QueryHandler from "../mediator/QueryHandler";

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
