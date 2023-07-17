import Device from "./Device";
import RemoteControl from "./RemoteControl";

export default class AdvancedRemoteControl extends RemoteControl {
    constructor(protected device: Device) {
        super(device);
    }
    mute() {
        this.device.setVolume(0);
    }
}
