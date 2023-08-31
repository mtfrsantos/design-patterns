import ElectronicDeviceRemote from "../../src/behavioral/command/client/ElectronicDeviceRemote";
import Radio from "../../src/behavioral/command/concrete_receivers/Radio";
import Television from "../../src/behavioral/command/concrete_receivers/Television";

test("Should turn the television on", function () {
    const television = new Television();
    const tvRemote = new ElectronicDeviceRemote(television);
    tvRemote.pressOn();
    expect(television.getState()).toEqual("on");
});

test("Should turn the radio on", function () {
    const radio = new Radio();
    const radioRemote = new ElectronicDeviceRemote(radio);
    radioRemote.pressOn();
    expect(radio.getState()).toEqual("on");
});

test("Should turn the television off", function () {
    const television = new Television();
    const tvRemote = new ElectronicDeviceRemote(television);
    tvRemote.pressOn();
    tvRemote.pressOff();
    expect(television.getState()).toEqual("off");
});

test("Should turn the radio off", function () {
    const radio = new Radio();
    const radioRemote = new ElectronicDeviceRemote(radio);
    radioRemote.pressOn();
    radioRemote.pressOff();
    expect(radio.getState()).toEqual("off");
});

test("Should turn the television off by undo", function () {
    const television = new Television();
    const tvRemote = new ElectronicDeviceRemote(television);
    tvRemote.pressOn();
    tvRemote.pressUndo();
    expect(television.getState()).toEqual("off");
});

test("Should turn the radio off by undo", function () {
    const radio = new Radio();
    const radioRemote = new ElectronicDeviceRemote(radio);
    radioRemote.pressOn();
    radioRemote.pressUndo();
    expect(radio.getState()).toEqual("off");
});

test("Should turn the television up", function () {
    const television = new Television();
    const tvRemote = new ElectronicDeviceRemote(television);
    tvRemote.pressOn();
    tvRemote.pressUp();
    expect(television.getVolume()).toEqual(10);
});

test("Should turn the radio up", function () {
    const radio = new Radio();
    const radioRemote = new ElectronicDeviceRemote(radio);
    radioRemote.pressOn();
    radioRemote.pressUp();
    expect(radio.getVolume()).toEqual(10);
});

test("Should turn the television down", function () {
    const television = new Television();
    const tvRemote = new ElectronicDeviceRemote(television);
    tvRemote.pressOn();
    tvRemote.pressUp();
    tvRemote.pressUp();
    tvRemote.pressUp();
    tvRemote.pressDown();
    expect(television.getVolume()).toEqual(20);
});

test("Should turn the radio down", function () {
    const radio = new Radio();
    const radioRemote = new ElectronicDeviceRemote(radio);
    radioRemote.pressOn();
    radioRemote.pressUp();
    radioRemote.pressUp();
    radioRemote.pressUp();
    radioRemote.pressDown();
    expect(radio.getVolume()).toEqual(20);
});

test("Should turn the television down by undo", function () {
    const television = new Television();
    const tvRemote = new ElectronicDeviceRemote(television);
    tvRemote.pressOn();
    tvRemote.pressUp();
    tvRemote.pressUp();
    tvRemote.pressUp();
    tvRemote.pressUndo();
    expect(television.getVolume()).toEqual(20);
});

test("Should turn the radio down by undo", function () {
    const radio = new Radio();
    const radioRemote = new ElectronicDeviceRemote(radio);
    radioRemote.pressOn();
    radioRemote.pressUp();
    radioRemote.pressUp();
    radioRemote.pressUp();
    radioRemote.pressUndo();
    expect(radio.getVolume()).toEqual(20);
});
