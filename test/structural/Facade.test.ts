import Text from "../../src/structural/facade/Text";

test("Should return a text without knowing about the sentences", function () {
    const text = new Text();
    expect(text.execute()).toEqual(
        "First sentence\nSecond sentence\nThird sentence\nFourth sentence\nFifth sentence"
    );
});
