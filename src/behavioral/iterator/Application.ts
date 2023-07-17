import DomainSpammer from "./DomainSpammer";
import EmailAddressCollection from "./EmailAddressCollection";

export default class Application {
    constructor(
        private spammer: DomainSpammer,
        private emailAddressCollection: EmailAddressCollection
    ) {}
    sendSpamToGmail(): string[] {
        const iterator = this.emailAddressCollection.createGmailIterator();
        return this.spammer.send(iterator, "Very important message");
    }
    sendSpamToYahoo(): string[] {
        const iterator = this.emailAddressCollection.createYahooIterator();
        return this.spammer.send(iterator, "Very important message");
    }
}
