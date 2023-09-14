import ArrayGenerator from "../../src/behavioral/iterator/ArrayGenerator";
import StringArray from "../../src/behavioral/iterator/concrete_collection/StringArray";
import ReversedStringArrayIterator from "../../src/behavioral/iterator/concrete_iterator/ReversedStringArrayIterator";
import UppercaseStringArrayIterator from "../../src/behavioral/iterator/concrete_iterator/UppercaseStringArrayIterator";

test("Should get an uppercase array of strings", function () {
    const collection = new StringArray(["a", "b", "c", "d"]);
    const iterator = new UppercaseStringArrayIterator(collection);
    const arrayGenerator = new ArrayGenerator(iterator);
    const uppercaseArray = arrayGenerator.execute();
    expect(uppercaseArray).toEqual(["A", "B", "C", "D"]);
});

test("Should get an reversed array of strings", function () {
    const collection = new StringArray(["a", "b", "c", "d"]);
    const iterator = new ReversedStringArrayIterator(collection);
    const arrayGenerator = new ArrayGenerator(iterator);
    const reversedArray = arrayGenerator.execute();
    expect(reversedArray).toEqual(["d", "c", "b", "a"]);
});
