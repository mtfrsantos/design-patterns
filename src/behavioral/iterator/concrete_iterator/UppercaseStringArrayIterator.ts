import StringArray from "../concrete_collection/StringArray";
import StringIterator from "../iterator/StringIterator";

export default class ReversedStringArrayIterator implements StringIterator {
    private currentPosition = 0;
    private collectionLength;
    constructor(private collection: StringArray) {
        this.collectionLength = this.collection.getLength();
    }
    getNextElement(): string {
        if (
            this.currentPosition < 0 ||
            this.currentPosition > this.collectionLength - 1
        )
            throw Error("Invalid index");
        const element =
            this.collection.getStringCollection()[this.currentPosition];
        this.currentPosition++;
        return element.toUpperCase();
    }
    hasMoreElement(): boolean {
        return (
            this.currentPosition >= 0 &&
            this.currentPosition < this.collectionLength
        );
    }
}
