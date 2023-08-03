import FifthSentence from "../subsystem/FifthSentence";
import FirstSentence from "../subsystem/FirstSentence";
import FourthSentence from "../subsystem/FourthSentence";
import SecondSentence from "../subsystem/SecondSentence";
import ThirdSentence from "../subsystem/ThirdSentence";

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
