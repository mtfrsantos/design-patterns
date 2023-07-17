export default class EmailAddress {
    constructor(readonly username: string, readonly domain: string) {}
    getEmailAddress(): string {
        return `${this.username}@${this.domain}`;
    }
}
