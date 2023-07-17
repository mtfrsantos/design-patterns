import Visitor from "./Visitor";

export default interface Shape {
    accept(visitor: Visitor): any;
}
