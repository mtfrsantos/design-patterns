import GetAllUsersQuery from "../../src/behavioral/mediator/GetAllUsersQuery";
import GetUserByIdQuery from "../../src/behavioral/mediator/GetUserByIdQuery";
import QueryHandler from "../../src/behavioral/mediator/QueryHandler";

test("Should return the query result", function () {
    const queryHandler = new QueryHandler();
    const getAllUsersQuery = new GetAllUsersQuery(queryHandler);
    expect(getAllUsersQuery.execute()).toEqual("Get all users");
    const getUserByIdQuery = new GetUserByIdQuery(queryHandler);
    expect(getUserByIdQuery.execute()).toEqual("Get user by id");
});
