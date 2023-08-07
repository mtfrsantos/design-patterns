import TreeType from "../TreeType";
export default class Tree {
    constructor(
        readonly x: number,
        readonly y: number,
        readonly type: TreeType
    ) {}
    draw(canvas: string[]) {
        this.type.draw(canvas, this.x, this.y);
    }
}
