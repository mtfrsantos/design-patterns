import Device from "../implementation/Device";

export default class TV implements Device {
    private enabled = false;
    private volume = 10;
    private channel = 1;
    isEnabled(): boolean {
        return this.enabled;
    }
    enable(): void {
        this.enabled = true;
    }
    disable(): void {
        this.enabled = false;
    }
    getVolume(): number {
        return this.volume;
    }
    setVolume(percent: number): void {
        this.volume = percent;
    }
    getChannel(): number {
        return this.channel;
    }
    setChannel(channel: number): void {
        this.channel = channel;
    }
}
