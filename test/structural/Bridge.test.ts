import AdvancedRemoteControl from "../../src/structural/bridge/refined_abstraction/AdvancedRemoteControl";
import Radio from "../../src/structural/bridge/concrete_implementation/Radio";
import RemoteControl from "../../src/structural/bridge/abstraction/RemoteControl";
import TV from "../../src/structural/bridge/concrete_implementation/TV";

test("Should validate the TV remote control", function () {
    const tv = new TV();
    const remoteControl = new RemoteControl(tv);
    remoteControl.togglePower();
    expect(tv.isEnabled()).toEqual(true);
});

test("Should validate the TV advanced remote control", function () {
    const tv = new TV();
    const advancedRemoteControl = new AdvancedRemoteControl(tv);
    advancedRemoteControl.togglePower();
    advancedRemoteControl.mute();
    expect(tv.isEnabled()).toEqual(true);
    expect(tv.getVolume()).toEqual(0);
});

test("Should validate the Radio remote control", function () {
    const radio = new Radio();
    const remoteControl = new RemoteControl(radio);
    remoteControl.togglePower();
    expect(radio.isEnabled()).toEqual(true);
});

test("Should validate the Radio advanced remote control", function () {
    const radio = new Radio();
    const advancedRemoteControl = new AdvancedRemoteControl(radio);
    advancedRemoteControl.togglePower();
    advancedRemoteControl.mute();
    expect(radio.isEnabled()).toEqual(true);
    expect(radio.getVolume()).toEqual(0);
});
