import Command from "./Command";

export default class InsertFirstLineCommand extends Command {
    execute(): void {
        this.saveBackup();
        this.editor.insertFirst("---");
    }
}
