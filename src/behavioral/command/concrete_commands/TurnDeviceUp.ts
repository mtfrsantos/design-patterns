import Command from "../command/Command";
import ElectronicDevice from "../receiver/ElectronicDevice";

export default class TurnDeviceUp implements Command {
    constructor(readonly electronicDevice: ElectronicDevice) {}
    execute(): void {
        this.electronicDevice.volumeUp();
    }
    undo(): void {
        this.electronicDevice.volumeDown();
    }
}
