import Database from "../../src/creational/singleton/Database";
import Spy from "../../src/creational/singleton/Spy";

test("Should return the same instance of the Database class", function () {
    const spy = new Spy();
    const first_database = Database.getInstance(spy);
    const second_database = Database.getInstance();
    expect(first_database).toBe(second_database);
    expect(spy.getRunCount()).toBe(1);
});
