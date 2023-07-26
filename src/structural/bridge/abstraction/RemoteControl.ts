import Device from "../implementation/Device";

export default class RemoteControl {
    constructor(protected device: Device) {}
    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
            return;
        }
        this.device.enable();
    }
    volumeDown(): void {
        let volume = this.device.getVolume();
        if (volume <= 0) {
            this.device.setVolume(0);
            return;
        }
        this.device.setVolume(--volume);
    }
    volumeUp(): void {
        let volume = this.device.getVolume();
        if (volume >= 100) {
            this.device.setVolume(100);
            return;
        }
        this.device.setVolume(++volume);
    }
    channelDown(): void {
        let channel = this.device.getChannel();
        if (channel <= 1) {
            this.device.setChannel(1);
            return;
        }
        this.device.setChannel(--channel);
    }
    channelUp(): void {
        let channel = this.device.getChannel();
        if (channel >= 1000) {
            this.device.setChannel(1000);
            return;
        }
        this.device.setChannel(++channel);
    }
}
