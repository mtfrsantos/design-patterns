import Query from "./Query";
import QueryHandler from "./QueryHandler";

export default class GetAllUsersQuery implements Query {
    statement: string;
    parameters: string[] | undefined;

    constructor(private handler: QueryHandler) {
        this.statement = "Get all users";
    }
    execute(): string {
        return this.handler.execute(this);
    }
}
