import Application from "../../src/behavioral/command/Application";
import ClearCommand from "../../src/behavioral/command/ClearCommand";
import CommandHistory from "../../src/behavioral/command/CommandHistory";
import Editor from "../../src/behavioral/command/Editor";
import InsertFirstLineCommand from "../../src/behavioral/command/InsertFirstLineCommand";
import InsertLastLineCommand from "../../src/behavioral/command/InsertLastLineCommand";

test("Should execute commands", function () {
    const editor = new Editor();
    const history = new CommandHistory();
    const application = new Application(history);
    const insertFirstLineCommand = new InsertFirstLineCommand(
        application,
        editor
    );
    const insertLastLineCommand = new InsertLastLineCommand(
        application,
        editor
    );
    const clearCommand = new ClearCommand(application, editor);
    application.executeCommand(insertFirstLineCommand);
    expect(editor.getFromIndex(0)).toBe("---");
    expect(editor.getLength()).toBe(1);
    application.executeCommand(insertLastLineCommand);
    expect(editor.getFromIndex(1)).toBe("---");
    expect(editor.getLength()).toBe(2);
    application.executeCommand(clearCommand);
    expect(editor.getLength()).toBe(0);
    application.undo();
    expect(editor.getFromIndex(1)).toBe("---");
    expect(editor.getLength()).toBe(2);
});
