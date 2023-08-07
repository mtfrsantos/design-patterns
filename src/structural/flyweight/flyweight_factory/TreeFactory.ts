import TreeType from "../TreeType";

export default class TreeFactory {
    static treeTypes: Map<
        { name: string; color: string; texture: string },
        TreeType
    > = new Map();
    static getTreeType(name: string, color: string, texture: string): TreeType {
        let type = this.treeTypes.get({ name, color, texture });
        if (type) return type;
        type = new TreeType(name, color, texture);
        this.treeTypes.set({ name, color, texture }, type);
        return type;
    }
}
