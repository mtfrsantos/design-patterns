import Transport from "../product/Transport";
export default class Truck implements Transport {
    deliver(): string {
        return "Land delivery in a box";
    }
}
