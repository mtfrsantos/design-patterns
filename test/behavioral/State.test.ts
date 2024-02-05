import Phone from "../../src/behavioral/state/context/Phone";

test("Should test how phone behave in different states", function () {
    const phone = new Phone();
    // offState
    expect(phone.touchOnScreen()).toBe("Nothing");
    expect(phone.pressVolumeButton()).toBe("Nothing");
    expect(phone.pressPowerButton()).toBe("Nothing");
    expect(phone.longPressPowerButton()).toBe("Turn On");
    // onState
    expect(phone.touchOnScreen()).toBe("Open App");
    expect(phone.pressVolumeButton()).toBe("Rise/Down Volume");
    expect(phone.pressPowerButton()).toBe("Lock Screen");
    // LockedState
    expect(phone.touchOnScreen()).toBe("Nothing");
    expect(phone.pressVolumeButton()).toBe("Nothing");
    expect(phone.pressPowerButton()).toBe("Unlock Screen");
});
