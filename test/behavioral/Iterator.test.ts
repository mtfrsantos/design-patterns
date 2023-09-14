import ArrayGenerator from "../../src/behavioral/iterator/ArrayGenerator";
import StringArray from "../../src/behavioral/iterator/concrete_collection/StringArray";

test("Should get an uppercase array of strings", function () {
    const collection = new StringArray(["a", "b", "c", "d"]);
    const iterator = collection.createUppercaseStringArrayIterator();
    const arrayGenerator = new ArrayGenerator(iterator);
    const uppercaseArray = arrayGenerator.execute();
    expect(uppercaseArray).toEqual(["A", "B", "C", "D"]);
});

test("Should get an reversed array of strings", function () {
    const collection = new StringArray(["a", "b", "c", "d"]);
    const iterator = collection.createReversedStringArrayIterator();
    const arrayGenerator = new ArrayGenerator(iterator);
    const reversedArray = arrayGenerator.execute();
    expect(reversedArray).toEqual(["d", "c", "b", "a"]);
});
