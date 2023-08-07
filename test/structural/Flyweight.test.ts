import Forest from "../../src/structural/flyweight/client/Forest";

test("Should return where the trees will be drawn", function () {
    const forest = new Forest();
    forest.plantTree(0, 1, "Palm tree", "Green", "Rough");
    forest.plantTree(0, 2, "Palm tree", "Green", "Rough");
    forest.plantTree(1, 1, "Palm tree", "Green", "Rough");
    forest.plantTree(1, 2, "Palm tree", "Green", "Rough");
    const canvas: string[] = [];
    forest.draw(canvas);
    expect(canvas).toEqual([
        "Green Rough Palm tree in 0, 1",
        "Green Rough Palm tree in 0, 2",
        "Green Rough Palm tree in 1, 1",
        "Green Rough Palm tree in 1, 2",
    ]);
});
