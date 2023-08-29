import User from "./User";
import UserValidation from "./UserValidation";

export default class CheckEnd implements UserValidation {
    constructor(readonly next?: UserValidation) {}
    execute(user: User): void {}
}
