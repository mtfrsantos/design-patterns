import ElectronicDevice from "../receiver/ElectronicDevice";

export default class Radio implements ElectronicDevice {
    private state: "on" | "off" = "off";
    private volume = 0;
    private maxVolume = 100;
    private minVolume = 0;
    private volumeStep = 10;
    on(): void {
        if (this.state === "off") this.state = "on";
    }
    off(): void {
        if (this.state === "on") this.state = "off";
    }
    volumeUp(): void {
        if (this.state === "off") return;
        if (this.volume >= this.maxVolume) {
            this.volume = this.maxVolume;
            return;
        }
        this.volume = this.volume + this.volumeStep;
    }
    volumeDown(): void {
        if (this.state === "off") return;
        if (this.volume <= this.minVolume) {
            this.volume = this.minVolume;
            return;
        }
        this.volume = this.volume - this.volumeStep;
    }
    getState(): "off" | "on" {
        return this.state;
    }
    getVolume(): number {
        return this.volume;
    }
}
