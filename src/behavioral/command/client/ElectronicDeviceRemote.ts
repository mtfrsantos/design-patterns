import DeviceButton from "../invoker/DeviceButton";
import ElectronicDevice from "../receiver/ElectronicDevice";
import TurnDeviceDown from "../concrete_commands/TurnDeviceDown";
import TurnDeviceOff from "../concrete_commands/TurnDeviceOff";
import TurnDeviceOn from "../concrete_commands/TurnDeviceOn";
import TurnDeviceUp from "../concrete_commands/TurnDeviceUp";

// Client
export default class ElectronicDeviceRemote {
    private onButton: DeviceButton;
    private offButton: DeviceButton;
    private upButton: DeviceButton;
    private downButton: DeviceButton;
    private lastButtonPressed: DeviceButton[] = [];
    constructor(readonly electronicDevice: ElectronicDevice) {
        const onCommand = new TurnDeviceOn(this.electronicDevice);
        this.onButton = new DeviceButton(onCommand);
        const offCommand = new TurnDeviceOff(this.electronicDevice);
        this.offButton = new DeviceButton(offCommand);
        const upCommand = new TurnDeviceUp(this.electronicDevice);
        this.upButton = new DeviceButton(upCommand);
        const downCommand = new TurnDeviceDown(this.electronicDevice);
        this.downButton = new DeviceButton(downCommand);
    }
    pressOn(): void {
        this.onButton.press();
        this.lastButtonPressed.push(this.onButton);
    }
    pressOff(): void {
        this.offButton.press();
        this.lastButtonPressed.push(this.offButton);
    }
    pressUp(): void {
        this.upButton.press();
        this.lastButtonPressed.push(this.upButton);
    }
    pressDown(): void {
        this.downButton.press();
        this.lastButtonPressed.push(this.downButton);
    }
    pressUndo(): void {
        const lastButton = this.lastButtonPressed.pop();
        if (lastButton) {
            lastButton.pressUndo();
        }
    }
}
