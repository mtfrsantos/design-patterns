export default class TreeType {
    constructor(
        readonly name: string,
        readonly color: string,
        readonly texture: string
    ) {}
    draw(canvas: string[], x: number, y: number): void {
        canvas.push(`${this.color} ${this.texture} ${this.name} in ${x}, ${y}`);
    }
}
