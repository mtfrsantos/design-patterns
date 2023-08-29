import User from "./User";
import UserValidation from "./UserValidation";

export default class UsernameValidation implements UserValidation {
    constructor(readonly next?: UserValidation) {}
    execute(user: User): void {
        if (user.username !== "user1") throw new Error("Wrong username");
        this.next?.execute(user);
    }
}
