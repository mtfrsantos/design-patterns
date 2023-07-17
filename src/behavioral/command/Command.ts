import Application from "./Application";
import Editor from "./Editor";

export default abstract class Command {
    protected backup: string[] = [];

    constructor(protected app: Application, protected editor: Editor) {
        this.app = app;
        this.editor = editor;
    }
    saveBackup(): void {
        this.backup = this.editor.getContent();
    }
    undo(): void {
        this.editor.setContent(this.backup);
    }
    abstract execute(): void;
}
