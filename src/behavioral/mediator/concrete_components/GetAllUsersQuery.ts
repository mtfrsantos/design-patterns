import Query from "../components/Query";
import ConcreteQueryHandler from "../concrete_mediators/ConcreteQueryHandler";

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
