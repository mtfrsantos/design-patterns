import Chair from "../abstract_products/Chair";

export default class ModernChair implements Chair {
    describeChair(): string {
        return "Modern Chair";
    }
}
