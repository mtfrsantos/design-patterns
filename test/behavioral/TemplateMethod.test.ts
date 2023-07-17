import AuthenticationServer from "../../src/behavioral/template_method/AuthenticationServer";
import AuthorizationServer from "../../src/behavioral/template_method/AuthorizationServer";
import LoginEndpoint from "../../src/behavioral/template_method/LoginEndpoint";
import FirstRestrictedEndpoint from "../../src/behavioral/template_method/firstRestrictedEndpoint";
import SecondRestrictedEndpoint from "../../src/behavioral/template_method/secondRestrictedEndpoint";

test("Should test different endpoints based on base abstract class", function () {
    const authenticationServer = new AuthenticationServer();
    const authorizationServer = new AuthorizationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const firstRestrictedEndpoint = new FirstRestrictedEndpoint(
        authenticationServer,
        authorizationServer
    );
    const secondRestrictedEndpoint = new SecondRestrictedEndpoint(
        authenticationServer,
        authorizationServer
    );
    const token = loginEndpoint.execute({
        body: {
            username: "admin_user",
            password: "admin_user",
        },
    });
    const firstRestrictedEndpointOutput = firstRestrictedEndpoint.execute({
        body: {
            nothing: "",
        },
        headers: {
            Authorization: token,
        },
    });
    const secondRestrictedEndpointOutput = secondRestrictedEndpoint.execute({
        body: {
            nothing: "",
        },
        headers: {
            Authorization: token,
        },
    });
    expect(firstRestrictedEndpointOutput).toEqual({ status: "successful" });
    expect(secondRestrictedEndpointOutput).toEqual({ status: "successful" });
});
