import EmailEventListener from "../../src/behavioral/observer/concrete_subscriber/EmailEventListener";
import EventManager from "../../src/behavioral/observer/publisher/EventManager";
import EventMessageFactory from "../../src/behavioral/observer/EventMessageFactory";
import LogEventListener from "../../src/behavioral/observer/concrete_subscriber/LogEventListener";
import QueueEventListener from "../../src/behavioral/observer/concrete_subscriber/QueueEventListener";
import UpdateSpy from "../../src/behavioral/observer/UpdateSpy";

test("Should notify the listeners", function () {
    const logUpdateSpy = new UpdateSpy();
    const queueUpdateSpy = new UpdateSpy();
    const emailUpdateSpy = new UpdateSpy();
    const eventManager = new EventManager();
    const logListener = new LogEventListener(logUpdateSpy);
    const queueListener = new QueueEventListener(queueUpdateSpy);
    const emailListener = new EmailEventListener(emailUpdateSpy);
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
    expect(logUpdateSpy.getCallCount()).toBe(3);
    expect(queueUpdateSpy.getCallCount()).toBe(2);
    expect(emailUpdateSpy.getCallCount()).toBe(3);
});
