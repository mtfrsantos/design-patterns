export default class StringArray {
    constructor(private stringCollection: string[]) {}
    getStringCollection(): string[] {
        return this.stringCollection;
    }
    getLength(): number {
        return this.stringCollection.length;
    }
}
