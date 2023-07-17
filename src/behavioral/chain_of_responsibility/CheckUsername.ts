import User from "./User";
import UserCheck from "./UserCheck";

export default class CheckUsername implements UserCheck {
    constructor(readonly next?: UserCheck) {}
    execute(user: User): void {
        if (user.username !== "user1") throw new Error("Wrong username");
        this.next?.execute(user);
    }
}
