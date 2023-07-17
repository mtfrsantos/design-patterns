import Query from "./Query";
import QueryHandler from "./QueryHandler";

export default class GetUserByIdQuery implements Query {
    statement: string;
    parameters: string[] | undefined;

    constructor(private handler: QueryHandler) {
        this.statement = "Get user by id";
    }
    execute(): string {
        return this.handler.execute(this);
    }
}
