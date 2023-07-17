import AdvancedRemoteControl from "../../src/structural/bridge/AdvancedRemoteControl";
import Radio from "../../src/structural/bridge/Radio";
import RemoteControl from "../../src/structural/bridge/RemoteControl";
import TV from "../../src/structural/bridge/TV";

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
