import Query from "../components/Query";
import QueryHandler from "../mediator/QueryHandler";

export default class GetUserByIdQuery implements Query {
    statement: string;
    parameters: string[] = [];

    constructor(private handler: QueryHandler) {
        this.statement = "select username from user where id=$1";
    }
    execute(): string {
        return this.handler.execute(this);
    }
}
