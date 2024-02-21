export default class AuthorizationServer {
    getUserFromToken(token: string): string {
        const decodedToken = JSON.parse(atob(token));
        return decodedToken.username;
    }
}
