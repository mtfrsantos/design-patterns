import NoValidation from "../../src/behavioral/chain_of_responsibility/NoValidation";
import PasswordValidation from "../../src/behavioral/chain_of_responsibility/PasswordValidation";
import UsernameValidation from "../../src/behavioral/chain_of_responsibility/UsernameValidation";
import User from "../../src/behavioral/chain_of_responsibility/User";
import IPValidation from "../../src/behavioral/chain_of_responsibility/IPValidation";

test("Should authenticate and autorize the user without any errors", function () {
    const firstUser = new User("user1", "password1", "172.10.1.1");
    const checkEnd = new NoValidation();
    const checkIP = new IPValidation(checkEnd);
    const checkPassword = new PasswordValidation(checkIP);
    const checkUsername = new UsernameValidation(checkPassword);
    expect(() => checkUsername.execute(firstUser)).not.toThrow(Error);
});

test("Should not authenticate and autorize the user", function () {
    const secondUser = new User("user1", "password1", "173.10.1.1");
    const checkEnd = new NoValidation();
    const checkIP = new CheckIP(checkEnd);
    const checkPassword = new PasswordValidation(checkIP);
    const checkUsername = new UsernameValidation(checkPassword);
    expect(() => checkUsername.execute(secondUser)).toThrow(Error);
});
