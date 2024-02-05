import State from "../state/State";
import OffState from "../concrete_states/OffState";

export default class Phone {
    private state: State;
    constructor() {
        this.state = new OffState(this);
    }
    changeState(state: State): void {
        this.state = state;
    }
    touchOnScreen(): string {
        return this.state.touchOnScreen();
    }
    pressVolumeButton(): string {
        return this.state.pressVolumeButton();
    }
    pressPowerButton(): string {
        return this.state.pressPowerButton();
    }
    longPressPowerButton(): string {
        return this.state.longPressPowerButton();
    }
    openApp(): string {
        return "Open App";
    }
    doNothing(): string {
        return "Nothing";
    }
    turnOn(): string {
        return "Turn On";
    }
    riseDownVolume(): string {
        return "Rise/Down Volume";
    }
    lockScreen(): string {
        return "Lock Screen";
    }
    unlockScreen(): string {
        return "Unlock Screen";
    }
    turnOff(): string {
        return "Turn Off";
    }
}
