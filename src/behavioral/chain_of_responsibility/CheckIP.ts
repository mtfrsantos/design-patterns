import User from "./User";
import UserCheck from "./UserCheck";

export default class CheckIP implements UserCheck {
    constructor(readonly next?: UserCheck) {}
    execute(user: User): void {
        if (user.ip !== "172.10.1.1") throw new Error("Wrong IP");
        this.next?.execute(user);
    }
}
