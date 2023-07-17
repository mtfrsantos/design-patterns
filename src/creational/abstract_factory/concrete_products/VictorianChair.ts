import Chair from "../abstract_products/Chair";

export default class VictorianChair implements Chair {
    describeChair(): string {
        return "Victorian Chair";
    }
}
