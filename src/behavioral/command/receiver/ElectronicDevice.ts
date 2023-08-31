// Receiver interface
export default interface ElectronicDevice {
    on(): void;
    off(): void;
    volumeUp(): void;
    volumeDown(): void;
    getState(): "on" | "off";
    getVolume(): number;
}
