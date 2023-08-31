import Command from "../command/Command";
import ElectronicDevice from "../receiver/ElectronicDevice";

export default class TurnDeviceOff implements Command {
    constructor(readonly electronicDevice: ElectronicDevice) {}
    execute(): void {
        this.electronicDevice.off();
    }
    undo(): void {
        this.electronicDevice.on();
    }
}
