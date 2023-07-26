import AdvancedRemoteControl from "../../src/structural/bridge/refined_abstraction/AdvancedRemoteControl";
import Radio from "../../src/structural/bridge/concrete_implementation/Radio";
import RemoteControl from "../../src/structural/bridge/abstraction/RemoteControl";
import TV from "../../src/structural/bridge/concrete_implementation/TV";

test("Should validate the TV and Radio", function () {
    const tv = new TV();
    const radio = new Radio();
    const tvRemoteControl = new RemoteControl(tv);
    const radioRemoteControl = new AdvancedRemoteControl(radio);
    tvRemoteControl.togglePower();
    radioRemoteControl.togglePower();
    radioRemoteControl.mute();
    expect(tv.isEnabled()).toEqual(true);
    expect(radio.getVolume()).toEqual(0);
});
