import Command from "./Command";

export default class ClearCommand extends Command {
    execute(): void {
        this.saveBackup();
        this.editor.clear();
    }
}
