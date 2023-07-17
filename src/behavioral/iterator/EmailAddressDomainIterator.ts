import EmailAddress from "./EmailAddress";
import EmailAddressIterator from "./EmailAddressIterator";

export default class EmailAddressDomainIterator
    implements EmailAddressIterator
{
    private cache: EmailAddress[] = [];
    private currentIndex = 0;
    constructor(
        private emailAddresses: EmailAddress[],
        private domain: string
    ) {
        this.cache = this.emailAddresses.reduce(
            (resultCollection: EmailAddress[], emailAddress) => {
                if (emailAddress.domain === this.domain) {
                    resultCollection.push(emailAddress);
                }
                return resultCollection;
            },
            []
        );
    }
    hasNext(): boolean {
        return this.currentIndex < this.cache.length;
    }
    next(): EmailAddress | null {
        if (this.hasNext()) {
            return this.cache[this.currentIndex++];
        }
        return null;
    }
}
