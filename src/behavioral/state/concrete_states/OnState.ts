import LockedState from "./LockedState";
import OffState from "./OffState";
import State from "../state/State";

export default class OnState extends State {
    touchOnScreen(): string {
        return this.phone.openApp();
    }
    pressVolumeButton(): string {
        return this.phone.riseDownVolume();
    }
    pressPowerButton(): string {
        const output = this.phone.lockScreen();
        this.phone.changeState(new LockedState(this.phone));
        return output;
    }
    longPressPowerButton(): string {
        const output = this.phone.turnOff();
        this.phone.changeState(new OffState(this.phone));
        return output;
    }
}
