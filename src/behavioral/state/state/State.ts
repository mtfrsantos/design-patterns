import Phone from "../context/Phone";

export default abstract class State {
    constructor(protected phone: Phone) {}
    abstract touchOnScreen(): string;
    abstract pressVolumeButton(): string;
    abstract pressPowerButton(): string;
    abstract longPressPowerButton(): string;
}
