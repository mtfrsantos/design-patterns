import User from "./User";
import UserCheck from "./UserCheck";

export default class CheckEnd implements UserCheck {
    constructor(readonly next?: UserCheck) {}
    execute(user: User): void {}
}
