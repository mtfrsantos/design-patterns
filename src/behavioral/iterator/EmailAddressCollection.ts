import EmailAddress from "./EmailAddress";
import EmailAddressDomainIterator from "./EmailAddressDomainIterator";
import EmailAddressIterator from "./EmailAddressIterator";

export default class EmailAddressCollection {
    constructor(private emailAddresses: EmailAddress[] = []) {}
    getEmailAddresses(): EmailAddress[] {
        return this.emailAddresses;
    }
    createGmailIterator(): EmailAddressIterator {
        return new EmailAddressDomainIterator(this.emailAddresses, "gmail.com");
    }
    createYahooIterator(): EmailAddressIterator {
        return new EmailAddressDomainIterator(this.emailAddresses, "yahoo.com");
    }
}
