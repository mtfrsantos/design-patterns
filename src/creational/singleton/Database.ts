import Spy from "./Spy";

export default class Database {
    private static instance?: Database;
    private constructor(spy?: Spy) {
        spy?.execute();
    }
    static getInstance(spy?: Spy): Database {
        if (!Database.instance) {
            Database.instance = new Database(spy);
        }
        return Database.instance;
    }
    query(query: string): string {
        return "Query method";
    }
}
