import AuthenticationServer from "../../src/behavioral/template_method/AuthenticationServer";
import AuthorizationServer from "../../src/behavioral/template_method/AuthorizationServer";
import LoginEndpoint from "../../src/behavioral/template_method/LoginEndpoint";
import AdminEndpoint from "../../src/behavioral/template_method/concrete_classes/AdminEndpoint";
import CommonEndpoint from "../../src/behavioral/template_method/concrete_classes/CommonEndpoint";

test("Should get admin user token from loginEndpoint", function () {
    const authenticationServer = new AuthenticationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const token = loginEndpoint.execute({
        body: {
            username: "admin_user",
            password: "admin_user",
        },
        headers: {},
    });
    expect(token).toBe(
        "eyJ1c2VybmFtZSI6ImFkbWluX3VzZXIiLCJwYXNzd29yZCI6ImFkbWluX3VzZXIifQ=="
    );
});

test("Should not get a valid token from loginEndpoint", function () {
    const authenticationServer = new AuthenticationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const token = loginEndpoint.execute({
        body: {
            username: "invalid_user",
            password: "invalid_user",
        },
        headers: {},
    });
    expect(token).toBe("invalidToken");
});

test("Should get common user token from loginEndpoint", function () {
    const authenticationServer = new AuthenticationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const token = loginEndpoint.execute({
        body: {
            username: "common_user",
            password: "common_user",
        },
        headers: {},
    });
    expect(token).toBe(
        "eyJ1c2VybmFtZSI6ImNvbW1vbl91c2VyIiwicGFzc3dvcmQiOiJjb21tb25fdXNlciJ9"
    );
});

test("Should get successful output from the admin endpoint with admin user token", function () {
    const authenticationServer = new AuthenticationServer();
    const authorizationServer = new AuthorizationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const adminEndpoint = new AdminEndpoint(
        authenticationServer,
        authorizationServer
    );
    const token = loginEndpoint.execute({
        body: {
            username: "admin_user",
            password: "admin_user",
        },
        headers: {},
    });
    const adminEndpointOutput =
        adminEndpoint.authenticateAndAuthorizeClientThenExecuteEndpoint({
            body: {
                nothing: "",
            },
            headers: {
                Authorization: token,
            },
        });
    expect(adminEndpointOutput).toEqual({ status: "successful" });
});

test("Should get successful output from the common endpoint with admin user token", function () {
    const authenticationServer = new AuthenticationServer();
    const authorizationServer = new AuthorizationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const commonEndpoint = new CommonEndpoint(
        authenticationServer,
        authorizationServer
    );
    const token = loginEndpoint.execute({
        body: {
            username: "admin_user",
            password: "admin_user",
        },
        headers: {},
    });
    const commonEndpointOutput =
        commonEndpoint.authenticateAndAuthorizeClientThenExecuteEndpoint({
            body: {
                nothing: "",
            },
            headers: {
                Authorization: token,
            },
        });
    expect(commonEndpointOutput).toEqual({ status: "successful" });
});

test("Should get successful output from the common endpoint with common user token", function () {
    const authenticationServer = new AuthenticationServer();
    const authorizationServer = new AuthorizationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const commonEndpoint = new CommonEndpoint(
        authenticationServer,
        authorizationServer
    );
    const token = loginEndpoint.execute({
        body: {
            username: "common_user",
            password: "common_user",
        },
        headers: {},
    });
    const commonEndpointOutput =
        commonEndpoint.authenticateAndAuthorizeClientThenExecuteEndpoint({
            body: {
                nothing: "",
            },
            headers: {
                Authorization: token,
            },
        });
    expect(commonEndpointOutput).toEqual({ status: "successful" });
});

test("Should get error from the admin endpoint with common user token", function () {
    const authenticationServer = new AuthenticationServer();
    const authorizationServer = new AuthorizationServer();
    const loginEndpoint = new LoginEndpoint(authenticationServer);
    const adminEndpoint = new AdminEndpoint(
        authenticationServer,
        authorizationServer
    );
    const token = loginEndpoint.execute({
        body: {
            username: "common_user",
            password: "common_user",
        },
        headers: {},
    });
    expect(() =>
        adminEndpoint.authenticateAndAuthorizeClientThenExecuteEndpoint({
            body: {
                nothing: "",
            },
            headers: {
                Authorization: token,
            },
        })
    ).toThrow("User not authorized");
});
