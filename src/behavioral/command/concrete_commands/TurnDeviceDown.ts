import Command from "../command/Command";
import ElectronicDevice from "../receiver/ElectronicDevice";

export default class TurnDeviceDown implements Command {
    constructor(readonly electronicDevice: ElectronicDevice) {}
    execute(): void {
        this.electronicDevice.volumeDown();
    }
    undo(): void {
        this.electronicDevice.volumeUp();
    }
}
