import LogisticsApplication from "../../src/creational/factory_method/client/LogisticsApplication";
import RoadLogistics from "../../src/creational/factory_method/concrete_creators/RoadLogistics";
import SeaLogistics from "../../src/creational/factory_method/concrete_creators/SeaLogistics";

test("Should return a land delivery in a box", function () {
    const logistics = new RoadLogistics();
    const application = new LogisticsApplication(logistics);
    expect(application.execute()).toBe("Land delivery in a box");
});

test("Should return a delivery by sea in a container", function () {
    const logistics = new SeaLogistics();
    const application = new LogisticsApplication(logistics);
    expect(application.execute()).toBe("Delivery by sea in a container");
});
