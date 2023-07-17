import User from "./User";
import UserCheck from "./UserCheck";

export default class CheckPassword implements UserCheck {
    constructor(readonly next?: UserCheck) {}
    execute(user: User): void {
        if (user.password !== "password1") throw new Error("Wrong password");
        this.next?.execute(user);
    }
}
