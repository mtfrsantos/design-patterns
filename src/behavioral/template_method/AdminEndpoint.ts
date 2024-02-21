import BaseRestrictedEndpoint from "./abstract_class/BaseRestrictedEndpoint";
import EndpointInput from "./EndpointInput";

export default class AdminEndpoint extends BaseRestrictedEndpoint {
    authorizeClient(token: string): void {
        const username = this.authorizationServer.getUserFromToken(token);
        if (username !== "admin_user") {
            throw new Error("User not authorized");
        }
    }
    executeEndpoint(input: EndpointInput): { status: string } {
        return { status: "successful" };
    }
}
