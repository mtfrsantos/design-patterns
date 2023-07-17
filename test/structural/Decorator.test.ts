import BasicNotifier from "../../src/structural/decorator/BasicNotifier";
import DiscordNotifier from "../../src/structural/decorator/DiscordNotifier";
import EmailNotifier from "../../src/structural/decorator/EmailNotifier";
import PushNotifier from "../../src/structural/decorator/PushNotifier";

test("Should return an email, push and discord notification", function () {
    let notificationStack = new BasicNotifier();
    notificationStack = new EmailNotifier(notificationStack);
    notificationStack = new PushNotifier(notificationStack);
    notificationStack = new DiscordNotifier(notificationStack);
    expect(notificationStack.send()).toEqual(
        "Discord notification\nPush notification\nEmail notification\nBasic notification"
    );
});
