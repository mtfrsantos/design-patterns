import User from "../User";
import UserValidation from "../UserValidation";

export default class IPValidation implements UserValidation {
    constructor(readonly next: UserValidation) {}
    execute(user: User): void {
        if (user.ip !== "172.10.1.1") throw new Error("Wrong IP");
        this.next.execute(user);
    }
}
