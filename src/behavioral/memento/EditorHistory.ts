import Snapshot from "./Snapshot";

export default class EditorHistory {
    private history: Snapshot[] = [];
    add(snapshot: Snapshot) {
        this.history.push(snapshot);
    }
    pop(): Snapshot | undefined {
        return this.history.pop();
    }
}
