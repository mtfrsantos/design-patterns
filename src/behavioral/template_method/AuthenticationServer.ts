export default class AuthenticationServer {
    private adminUserToken = "";
    private commonUserToken = "";

    constructor() {
        this.adminUserToken = btoa(
            JSON.stringify({
                username: "admin_user",
                password: "admin_user",
            })
        );
        this.commonUserToken = btoa(
            JSON.stringify({
                username: "common_user",
                password: "common_user",
            })
        );
    }
    generateToken(username: string, password: string): string {
        if (username === "admin_user" && password === "admin_user") {
            return this.adminUserToken;
        }
        if (username === "common_user" && password === "common_user") {
            return this.commonUserToken;
        }
        return "invalidToken";
    }
    validateToken(token: string): boolean {
        return [this.adminUserToken, this.commonUserToken].includes(token);
    }
}
