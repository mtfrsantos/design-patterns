import User from "../User";

export default interface UserValidation {
    next?: UserValidation;
    execute(user: User): void;
}
