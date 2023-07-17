import EmailAddress from "./EmailAddress";

export default interface EmailAddressIterator {
    hasNext(): boolean;
    next(): EmailAddress | null;
}
