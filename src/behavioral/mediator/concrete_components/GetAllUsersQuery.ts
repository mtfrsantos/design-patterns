import Query from "../components/Query";
import QueryHandler from "../mediator/QueryHandler";

export default class GetAllUsersQuery implements Query {
    statement: string;
    parameters: string[] = [];

    constructor(private handler: QueryHandler) {
        this.statement = "select username from user";
    }
    execute(): string {
        return this.handler.execute(this);
    }
}
