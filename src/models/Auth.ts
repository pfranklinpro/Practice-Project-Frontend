export default class Auth {
    id: string;
    username: string;
    active: boolean;
    role: string;
    token: string;

    constructor(id: string, username: string, active: boolean, role: string, token: string) {
        this.id = id;
        this.username = username;
        this.active = active;
        this.role = role;
        this.token = token;
    }
}
