import Command from "../command/Command";

export default class DeviceButton {
    constructor(private command: Command) {}
    press(): void {
        this.command.execute();
    }
    pressUndo(): void {
        this.command.undo();
    }
}
