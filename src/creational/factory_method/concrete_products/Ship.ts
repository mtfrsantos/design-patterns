import Transport from "../product/Transport";

export default class Ship implements Transport {
    deliver(): string {
        return "Delivery by sea in a container";
    }
}
