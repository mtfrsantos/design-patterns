// Concrete component
import Query from "../components/Query";
import ConcreteQueryHandler from "../concrete_mediators/ConcreteQueryHandler";

export default class GetUserByIdQuery implements Query {
    statement: string;
    parameters: string[] = [];

    constructor(private handler: ConcreteQueryHandler) {
        this.statement = "select username from user where id=$1";
    }
    execute(): string {
        return this.handler.execute(this);
    }
}
