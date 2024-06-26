import BaseNotifier from "../../src/structural/decorator/concrete_component/BaseNotifier";
import DiscordNotifier from "../../src/structural/decorator/decorators/DiscordNotifier";
import EmailNotifier from "../../src/structural/decorator/decorators/EmailNotifier";
import PushNotifier from "../../src/structural/decorator/decorators/PushNotifier";

test("Should return an email, push and discord notification", function () {
    let notificationStack = new BaseNotifier();
    notificationStack = new EmailNotifier(notificationStack);
    notificationStack = new PushNotifier(notificationStack);
    notificationStack = new DiscordNotifier(notificationStack);
    expect(notificationStack.send()).toEqual(
        "Discord notification\nPush notification\nEmail notification\nBase notification"
    );
});
