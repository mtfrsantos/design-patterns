import StringArray from "../concrete_collection/StringArray";
import StringIterator from "../iterator/StringIterator";

export default class ReversedStringArrayIterator implements StringIterator {
    private currentPosition;
    private collectionLength;
    constructor(private collection: string[]) {
        this.collectionLength = this.collection.length;
        this.currentPosition = this.collection.length - 1;
    }
    getNextElement(): string {
        if (
            this.currentPosition < 0 ||
            this.currentPosition > this.collectionLength - 1
        )
            throw Error("Invalid index");
        const element = this.collection[this.currentPosition];
        this.currentPosition--;
        return element;
    }
    hasMoreElement(): boolean {
        return (
            this.currentPosition >= 0 &&
            this.currentPosition <= this.collectionLength
        );
    }
}
