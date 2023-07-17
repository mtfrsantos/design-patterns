import Command from "./Command";

export default class InsertLastLineCommand extends Command {
    execute(): void {
        this.saveBackup();
        this.editor.insertLast("---");
    }
}
