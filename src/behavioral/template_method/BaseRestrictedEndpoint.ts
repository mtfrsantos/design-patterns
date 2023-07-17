import AuthenticationServer from "./AuthenticationServer";
import AuthorizationServer from "./AuthorizationServer";
import EndpointInput from "./EndpointInput";

export default abstract class BaseRestrictedEndpoint {
    constructor(
        private authenticationServer: AuthenticationServer,
        private authorizationServer: AuthorizationServer
    ) {}

    execute(input: EndpointInput): { status: string } | void {
        if (!input.headers) {
            throw new Error("Missing headers");
        }
        this.authenticate(input.headers.Authorization);
        this.authorize(input.headers.Authorization);
        return this.endpointExecute(input);
    }

    abstract endpointExecute(input: EndpointInput): { status: string };

    authenticate(token: string): void {
        if (!this.authenticationServer.validateToken(token)) {
            throw new Error("Invalid token");
        }
    }
    authorize(token: string): void {
        if (!this.authorizationServer.execute(token)) {
            throw new Error("Invalid user");
        }
    }
}
