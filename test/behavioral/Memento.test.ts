import Editor from "../../src/behavioral/memento/originator/Editor";
import EditorHistory from "../../src/behavioral/memento/caretaker/EditorHistory";

test("Should recovery last state", function () {
    const editor = new Editor();
    const editorHistory = new EditorHistory(editor);
    editorHistory.save();
    editor.addLine("First Line");
    editorHistory.save();
    editor.addLine("Second Line");
    editorHistory.save();
    editor.addLine("Third Line");
    editorHistory.save();
    expect(editor.getState()).toEqual([
        "First Line",
        "Second Line",
        "Third Line",
    ]);
    editorHistory.undo();
    expect(editor.getState()).toEqual(["First Line", "Second Line"]);
    editorHistory.undo();
    expect(editor.getState()).toEqual(["First Line"]);
    editorHistory.undo();
    expect(editor.getState()).toEqual([]);
    editorHistory.undo();
    expect(editor.getState()).toEqual([]);
});
