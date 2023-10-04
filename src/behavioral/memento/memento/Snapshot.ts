export default class Snapshot {
    private editorArea: string[] = [];
    constructor(editorArea: string[]) {
        this.editorArea = editorArea;
    }
    get() {
        return this.editorArea;
    }
}
