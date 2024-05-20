import Visitor from "../visitor/Visitor";

export default interface Shape {
    accept(visitor: Visitor): any;
}

