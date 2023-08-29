import CheckEnd from "../../src/behavioral/chain_of_responsibility/CheckEnd";
import CheckIP from "../../src/behavioral/chain_of_responsibility/CheckIP";
import CheckPassword from "../../src/behavioral/chain_of_responsibility/CheckPassword";
import UsernameValidation from "../../src/behavioral/chain_of_responsibility/UsernameValidation";
import User from "../../src/behavioral/chain_of_responsibility/User";

test("Should authenticate and autorize the user without any errors", function () {
    const firstUser = new User("user1", "password1", "172.10.1.1");
    const checkEnd = new CheckEnd();
    const checkIP = new CheckIP(checkEnd);
    const checkPassword = new CheckPassword(checkIP);
    const checkUsername = new UsernameValidation(checkPassword);
    expect(() => checkUsername.execute(firstUser)).not.toThrow(Error);
});

test("Should not authenticate and autorize the user", function () {
    const secondUser = new User("user1", "password1", "173.10.1.1");
    const checkEnd = new CheckEnd();
    const checkIP = new CheckIP(checkEnd);
    const checkPassword = new CheckPassword(checkIP);
    const checkUsername = new UsernameValidation(checkPassword);
    expect(() => checkUsername.execute(secondUser)).toThrow(Error);
});
