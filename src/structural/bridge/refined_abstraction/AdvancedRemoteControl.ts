import Device from "../implementation/Device";
import RemoteControl from "../abstraction/RemoteControl";

export default class AdvancedRemoteControl extends RemoteControl {
    constructor(protected device: Device) {
        super(device);
    }
    mute() {
        this.device.setVolume(0);
    }
}
