import Editor from "../../src/behavioral/memento/Editor";
import EditorHistory from "../../src/behavioral/memento/EditorHistory";

test("Should recovery last state", function () {
    const editor = new Editor();
    const editorHistory = new EditorHistory();
    editorHistory.add(editor.save());
    editor.addLine("First Line");
    editorHistory.add(editor.save());
    editor.addLine("Second Line");
    editorHistory.add(editor.save());
    editor.addLine("Third Line");
    editorHistory.add(editor.save());
    expect(editor.getState()).toEqual([
        "First Line",
        "Second Line",
        "Third Line",
    ]);
    editorHistory.pop()!;
    editor.restore(editorHistory.pop()!);
    expect(editor.getState()).toEqual(["First Line", "Second Line"]);
    editor.restore(editorHistory.pop()!);
    expect(editor.getState()).toEqual(["First Line"]);
    editor.restore(editorHistory.pop()!);
    expect(editor.getState()).toEqual([]);
});
