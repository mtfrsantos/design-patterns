import EmailAddress from "../../src/behavioral/iterator/EmailAddress";
import EmailAddressCollection from "../../src/behavioral/iterator/EmailAddressCollection";
import DomainSpammer from "../../src/behavioral/iterator/DomainSpammer";
import Application from "../../src/behavioral/iterator/Application";

test("Should send emails to a specific domain in a collection of email addresses", function () {
    const emailAddresses = [
        new EmailAddress("a", "gmail.com"),
        new EmailAddress("b", "gmail.com"),
        new EmailAddress("c", "yahoo.com"),
        new EmailAddress("d", "yahoo.com"),
    ];
    const emailAddressCollection = new EmailAddressCollection(emailAddresses);
    const domainSpammer = new DomainSpammer();
    const application = new Application(domainSpammer, emailAddressCollection);
    let spamCollection = application.sendSpamToGmail();
    expect(spamCollection).toEqual([
        "Very important message to a@gmail.com",
        "Very important message to b@gmail.com",
    ]);
    spamCollection = application.sendSpamToYahoo();
    expect(spamCollection).toEqual([
        "Very important message to c@yahoo.com",
        "Very important message to d@yahoo.com",
    ]);
});
