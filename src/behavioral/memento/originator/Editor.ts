import Snapshot from "../memento/Snapshot";

export default class Editor {
    private editorArea: string[] = [];

    addLine(line: string) {
        this.editorArea.push(line);
    }
    save() {
        return new Snapshot([...this.editorArea]);
    }
    restore(snapshot: Snapshot) {
        this.editorArea = snapshot.get();
    }
    getState() {
        return [...this.editorArea];
    }
}
