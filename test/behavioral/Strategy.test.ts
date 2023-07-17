import AddStrategy from "../../src/behavioral/strategy/AddStrategy";
import Context from "../../src/behavioral/strategy/Context";
import MultiplyStrategy from "../../src/behavioral/strategy/MultiplyStrategy";
import SubtractStrategy from "../../src/behavioral/strategy/SubtractStrategy";

test("Should change behave of the context", function () {
    const context = new Context();
    const addStrategy = new AddStrategy();
    const subtractStrategy = new SubtractStrategy();
    const multiplyStrategy = new MultiplyStrategy();
    context.setStrategy(addStrategy);
    expect(context.executeStrategy(10, 20)).toBe(30);
    context.setStrategy(subtractStrategy);
    expect(context.executeStrategy(10, 20)).toBe(-10);
    context.setStrategy(multiplyStrategy);
    expect(context.executeStrategy(10, 20)).toBe(200);
});
