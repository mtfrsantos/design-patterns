import FifthSentence from "../subsystem/FifthSentence";
import FirstSentence from "../subsystem/FirstSentence";
import FourthSentence from "../FourthSentence";
import SecondSentence from "../SecondSentence";
import ThirdSentence from "../ThirdSentence";

export default class Text {
    execute(): string {
        let sentences = [
            new FirstSentence(),
            new SecondSentence(),
            new ThirdSentence(),
            new FourthSentence(),
            new FifthSentence(),
        ];
        const rawSentences = sentences.map((sentence) => sentence.execute());
        return rawSentences.join("\n");
    }
}