import EmailAddressIterator from "./EmailAddressIterator";

export default class DomainSpammer {
    send(iterator: EmailAddressIterator, message: string): string[] {
        const sendLogCollection: string[] = [];
        while (iterator.hasNext()) {
            const emailAddress = iterator.next();
            if (emailAddress) {
                sendLogCollection.push(
                    `${message} to ${emailAddress.getEmailAddress()}`
                );
            }
        }
        return sendLogCollection;
    }
}
