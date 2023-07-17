import Command from "./Command";

export default class CommandHistory {
    private commands: Command[] = [];
    push(command: Command): void {
        this.commands.push(command);
    }
    pop(): Command | undefined {
        return this.commands.pop();
    }
}
