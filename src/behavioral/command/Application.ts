import Command from "./Command";
import CommandHistory from "./CommandHistory";

export default class Application {
    constructor(private history: CommandHistory) {}
    executeCommand(command: Command): void {
        command.execute();
        this.history.push(command);
    }
    undo(): void {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}
