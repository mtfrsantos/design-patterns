import Shape from "./Shape";
import Visitor from "./Visitor";

export default class Application {
    constructor(private shapes: Shape[], private visitor: Visitor) {}
    export(): any {
        const visitorOutput: any[] = [];
        for (const shape of this.shapes) {
            visitorOutput.push(shape.accept(this.visitor));
        }
        return visitorOutput;
    }
}
