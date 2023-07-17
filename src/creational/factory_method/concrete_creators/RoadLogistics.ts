import Logistics from "../creator/Logistics";
import Transport from "../product/Transport";
import Truck from "../concrete_products/Truck";

export default class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}
