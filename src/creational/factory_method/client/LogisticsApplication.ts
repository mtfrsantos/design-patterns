import Logistics from "../creator/Logistics";

export default class LogisticsApplication {
    constructor(readonly logistics: Logistics) {}

    execute(): string {
        return this.logistics.planDelivery();
    }
}
