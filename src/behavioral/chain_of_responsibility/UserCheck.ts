import User from "./User";

export default interface UserCheck {
    next?: UserCheck;
    execute(user: User): void;
}
