import User from "./User";
import UserValidation from "./UserValidation";

export default class CheckPassword implements UserValidation {
    constructor(readonly next?: UserValidation) {}
    execute(user: User): void {
        if (user.password !== "password1") throw new Error("Wrong password");
        this.next?.execute(user);
    }
}
