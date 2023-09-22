import GetAllUsersQuery from "../../src/behavioral/mediator/GetAllUsersQuery";
import GetUserByIdQuery from "../../src/behavioral/mediator/GetUserByIdQuery";
import ConcreteQueryHandler from "../../src/behavioral/mediator/ConcreteQueryHandler";

test("Should return the query result", function () {
    const queryHandler = new ConcreteQueryHandler();
    const getAllUsersQuery = new GetAllUsersQuery(queryHandler);
    expect(getAllUsersQuery.execute()).toEqual(
        "GetAllUsersQuery: select username from user"
    );
    const getUserByIdQuery = new GetUserByIdQuery(queryHandler);
    expect(getUserByIdQuery.execute()).toEqual(
        "GetUserByIdQuery: select username from user where id=$1"
    );
});
