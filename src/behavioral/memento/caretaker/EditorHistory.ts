import Editor from "../originator/Editor";
import Snapshot from "../memento/Snapshot";

export default class EditorHistory {
    private history: Snapshot[] = [];
    constructor(private editor: Editor) {}
    save(): void {
        const snapshot = this.editor.save();
        this.history.push(snapshot);
    }
    undo(): void {
        let snapshot = this.history.pop();
        if (!snapshot) {
            return;
        }
        if (snapshot.get().toString() === this.editor.getState().toString()) {
            snapshot = this.history.pop();
        }
        this.editor.restore(snapshot!);
    }
}
