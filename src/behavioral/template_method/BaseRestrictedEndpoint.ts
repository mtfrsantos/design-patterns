import AuthenticationServer from "./AuthenticationServer";
import AuthorizationServer from "./AuthorizationServer";
import EndpointInput from "./EndpointInput";

export default abstract class BaseRestrictedEndpoint {
    constructor(
        private authenticationServer: AuthenticationServer,
        protected authorizationServer: AuthorizationServer
    ) {}

    authenticateAndAuthorizeClientThenExecuteEndpoint(input: EndpointInput): {
        status: string;
    } {
        this.authenticateClient(input.headers.Authorization);
        this.authorizeClient(input.headers.Authorization);
        return this.executeEndpoint(input);
    }

    abstract executeEndpoint(input: EndpointInput): { status: string };
    abstract authorizeClient(token: string): void;

    authenticateClient(token: string): void {
        if (!this.authenticationServer.validateToken(token)) {
            throw new Error("Invalid token");
        }
    }
}
