import CarBuilder from "../../src/creational/builder/concrete_builders/CarBuilder";
import Director from "../../src/creational/builder/director/Director";
import ManualBuilder from "../../src/creational/builder/concrete_builders/ManualBuilder";

test("Should create a sport car and its manual", function () {
    const carBuilder = new CarBuilder();
    const manualBuilder = new ManualBuilder();
    const director = new Director(carBuilder);
    const car = director.createSportsCar();
    director.setNewBuilder(manualBuilder);
    const manual = director.createSportsCar();
    expect(car).toEqual({
        seats: 2,
        engine: { speed: "High", torque: "Low" },
        onBoardComputer: true,
        gps: true,
    });
    expect(manual).toEqual({
        seats: 2,
        engine: { speed: "High", torque: "Low" },
        onBoardComputer: true,
        gps: true,
    });
});

test("Should create a popular car and its manual", function () {
    const carBuilder = new CarBuilder();
    const manualBuilder = new ManualBuilder();
    const director = new Director(carBuilder);
    const car = director.createPopularCar();
    director.setNewBuilder(manualBuilder);
    const manual = director.createPopularCar();
    expect(car).toEqual({
        seats: 4,
        engine: { speed: "Medium", torque: "Low" },
        onBoardComputer: false,
        gps: false,
    });
    expect(manual).toEqual({
        seats: 4,
        engine: { speed: "Medium", torque: "Low" },
        onBoardComputer: false,
        gps: false,
    });
});
