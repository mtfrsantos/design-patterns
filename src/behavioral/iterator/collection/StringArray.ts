import StringIterator from "../iterator/StringIterator";

export default interface StringArray {
    createUppercaseStringArrayIterator(): StringIterator;
    createReversedStringArrayIterator(): StringIterator;
}
