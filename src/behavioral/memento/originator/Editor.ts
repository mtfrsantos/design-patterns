import Snapshot from "../memento/Snapshot";

export default class Editor {
    private editorArea: string[] = [];

    addLine(line: string): void {
        this.editorArea.push(line);
    }
    save(): Snapshot {
        return new Snapshot([...this.editorArea]);
    }
    restore(snapshot: Snapshot): void {
        this.editorArea = snapshot.get();
    }
    getState(): string[] {
        return [...this.editorArea];
    }
}
