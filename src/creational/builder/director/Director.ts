import Builder from "../builder/Builder";
import Car from "../products/Car";
import Manual from "../products/Manual";

export default class Director {
    private builder: Builder;
    constructor(builder: Builder) {
        this.builder = builder;
    }
    setNewBuilder(builder: Builder) {
        this.builder = builder;
    }
    createSportsCar(): Car | Manual {
        this.builder.reset();
        this.builder.setSeats(2);
        this.builder.setEngine({ speed: "High", torque: "Low" });
        this.builder.setOnBoardComputer(true);
        this.builder.setGPS(true);
        return this.builder.getResult();
    }

    createPopularCar(): Car | Manual {
        this.builder.reset();
        this.builder.setSeats(4);
        this.builder.setEngine({ speed: "Medium", torque: "Low" });
        this.builder.setOnBoardComputer(false);
        this.builder.setGPS(false);
        return this.builder.getResult();
    }
}
