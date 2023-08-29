import User from "../User";
import UserValidation from "../handler/UserValidation";

export default class NoValidation implements UserValidation {
    constructor(readonly next?: UserValidation) {}
    execute(user: User): void {}
}
