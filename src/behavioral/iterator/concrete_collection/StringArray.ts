import StringArrayCollection from "../collection/StringArrayCollection";
import StringIterator from "../iterator/StringIterator";
import UppercaseStringArrayIterator from "../concrete_iterator/UppercaseStringArrayIterator";
import ReversedStringArrayIterator from "../concrete_iterator/ReversedStringArrayIterator";

export default class StringArray implements StringArrayCollection {
    constructor(private stringCollection: string[]) {}
    createUppercaseStringArrayIterator(): StringIterator {
        return new UppercaseStringArrayIterator(this.stringCollection);
    }
    createReversedStringArrayIterator(): StringIterator {
        return new ReversedStringArrayIterator(this.stringCollection);
    }
}
