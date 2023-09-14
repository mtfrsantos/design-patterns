import StringIterator from "./iterator/StringIterator";

export default class ArrayGenerator {
    constructor(private iterator: StringIterator) {}
    execute(): string[] {
        const collection: string[] = [];
        while (this.iterator.hasMoreElement()) {
            collection.push(this.iterator.getNextElement());
        }
        return collection;
    }
}
