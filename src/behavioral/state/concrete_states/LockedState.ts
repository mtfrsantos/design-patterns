import OffState from "./OffState";
import OnState from "./OnState";
import State from "../state/State";

export default class LockedState extends State {
    touchOnScreen(): string {
        return this.phone.doNothing();
    }
    pressVolumeButton(): string {
        return this.phone.doNothing();
    }
    pressPowerButton(): string {
        const output = this.phone.unlockScreen();
        this.phone.changeState(new OnState(this.phone));
        return output;
    }
    longPressPowerButton(): string {
        const output = this.phone.turnOff();
        this.phone.changeState(new OffState(this.phone));
        return output;
    }
}
