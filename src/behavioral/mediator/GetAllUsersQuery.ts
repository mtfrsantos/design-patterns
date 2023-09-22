// Concrete component
import Query from "./Query";
import ConcreteQueryHandler from "./ConcreteQueryHandler";

export default class GetAllUsersQuery implements Query {
    statement: string;
    parameters: string[] = [];

    constructor(private handler: ConcreteQueryHandler) {
        this.statement = "select username from user";
    }
    execute(): string {
        return this.handler.execute(this);
    }
}
