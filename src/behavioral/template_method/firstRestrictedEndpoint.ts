import BaseRestrictedEndpoint from "./BaseRestrictedEndpoint";
import EndpointInput from "./EndpointInput";

export default class FirstRestrictedEndpoint extends BaseRestrictedEndpoint {
    endpointExecute(input: EndpointInput): { status: string } {
        return { status: "successful" };
    }
}
