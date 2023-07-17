import Phone from "./Phone";

export default abstract class State {
    constructor(protected phone: Phone) {}
    abstract touchOnScreen(): string;
    abstract pressVolumeButton(): string;
    abstract pressPowerButton(): string;
    abstract longPressPowerButton(): string;
}
