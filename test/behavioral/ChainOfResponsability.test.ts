import NoValidation from "../../src/behavioral/chain_of_responsibility/NoValidation";
import PasswordValidation from "../../src/behavioral/chain_of_responsibility/PasswordValidation";
import UsernameValidation from "../../src/behavioral/chain_of_responsibility/UsernameValidation";
import User from "../../src/behavioral/chain_of_responsibility/User";
import IPValidation from "../../src/behavioral/chain_of_responsibility/IPValidation";

test("Should authenticate and autorize the user without any errors", function () {
    const user = new User("user1", "password1", "172.10.1.1");
    const noValidation = new NoValidation();
    const ipValidation = new IPValidation(noValidation);
    const passwordValidation = new PasswordValidation(ipValidation);
    const usernameValidation = new UsernameValidation(passwordValidation);
    expect(() => usernameValidation.execute(user)).not.toThrow(Error);
});

test("Should not authenticate and autorize the user", function () {
    const user = new User("user1", "password1", "173.10.1.1");
    const noValidation = new NoValidation();
    const ipValidation = new IPValidation(noValidation);
    const passwordValidation = new PasswordValidation(ipValidation);
    const usernameValidation = new UsernameValidation(passwordValidation);
    expect(() => usernameValidation.execute(user)).toThrow(Error);
});
