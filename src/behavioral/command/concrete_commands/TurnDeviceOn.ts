import Command from "../command/Command";
import ElectronicDevice from "../receiver/ElectronicDevice";

export default class TurnDeviceOn implements Command {
    constructor(readonly electronicDevice: ElectronicDevice) {}
    execute(): void {
        this.electronicDevice.on();
    }
    undo(): void {
        this.electronicDevice.off();
    }
}
