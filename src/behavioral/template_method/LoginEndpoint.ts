import AuthenticationServer from "./AuthenticationServer";
import EndpointInput from "./EndpointInput";

export default class LoginEndpoint {
    constructor(private authenticationServer: AuthenticationServer) {}
    execute(input: EndpointInput): string | void {
        return this.authenticationServer.generateToken(
            input.body.username,
            input.body.password
        );
    }
}
