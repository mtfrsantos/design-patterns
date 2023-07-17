import GetAllUsersQuery from "./GetAllUsersQuery";
import GetUserByIdQuery from "./GetUserByIdQuery";
import Query from "./Query";

export default class QueryHandler {
    execute(query: Query): string {
        if (query instanceof GetAllUsersQuery) {
            return "Get all users";
        }
        if (query instanceof GetUserByIdQuery) {
            return "Get user by id";
        }
        throw new Error("Unknown query");
    }
}
