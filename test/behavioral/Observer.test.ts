import EmailEventListener from "../../src/behavioral/observer/EmailEventListener";
import EventManager from "../../src/behavioral/observer/EventManager";
import EventMessageFactory from "../../src/behavioral/observer/EventMessageFactory";
import LogEventListener from "../../src/behavioral/observer/LogEventListener";
import QueueEventListener from "../../src/behavioral/observer/QueueEventListener";
import UpdateCallSpy from "../../src/behavioral/observer/UpdateCallSpy";

test("Should notify the listeners", function () {
    const logUpdateCallSpy = new UpdateCallSpy();
    const queueUpdateCallSpy = new UpdateCallSpy();
    const emailUpdateCallSpy = new UpdateCallSpy();
    const eventManager = new EventManager();
    const logListener = new LogEventListener(logUpdateCallSpy);
    const queueListener = new QueueEventListener(queueUpdateCallSpy);
    const emailListener = new EmailEventListener(emailUpdateCallSpy);
    eventManager.subscribe("log", logListener);
    eventManager.subscribe("log", queueListener);
    eventManager.subscribe("log", emailListener);
    eventManager.subscribe("queue", queueListener);
    eventManager.subscribe("email", emailListener);
    const eventMessageFactory = new EventMessageFactory();
    const infoLogMessage = eventMessageFactory.createLogMessage(
        "info",
        "Hello World",
        "someMethod",
        "Observer"
    );
    const warningLogMessage = eventMessageFactory.createLogMessage(
        "warning",
        "Hello World",
        "someMethod",
        "Observer"
    );
    const errorLogMessage = eventMessageFactory.createLogMessage(
        "error",
        "Hello World",
        "someMethod",
        "Observer"
    );
    const queueMessage = eventMessageFactory.createQueueMessage("queue");
    const emailMessage = eventMessageFactory.createEmailMessage("email");
    eventManager.notify("log", infoLogMessage);
    eventManager.notify("log", warningLogMessage);
    eventManager.notify("log", errorLogMessage);
    eventManager.notify("queue", queueMessage);
    eventManager.notify("email", emailMessage);
    expect(logUpdateCallSpy.getCallCount()).toBe(3);
    expect(queueUpdateCallSpy.getCallCount()).toBe(2);
    expect(emailUpdateCallSpy.getCallCount()).toBe(3);
});
