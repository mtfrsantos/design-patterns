import StringIterator from "../iterator/StringIterator";

export default interface StringArrayCollection {
    createUppercaseStringArrayIterator(): StringIterator;
    createReversedStringArrayIterator(): StringIterator;
}
