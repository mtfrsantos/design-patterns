import OnState from "./OnState";
import State from "./State";

export default class OffState extends State {
    touchOnScreen(): string {
        return this.phone.doNothing();
    }
    pressVolumeButton(): string {
        return this.phone.doNothing();
    }
    pressPowerButton(): string {
        return this.phone.doNothing();
    }
    longPressPowerButton(): string {
        const output = this.phone.turnOn();
        this.phone.changeState(new OnState(this.phone));
        return output;
    }
}
