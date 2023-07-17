import Logistics from "../creator/Logistics";
import Ship from "../concrete_products/Ship";
import Transport from "../product/Transport";

export default class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}
