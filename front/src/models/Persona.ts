
export default class Persona {
    name: string;
    username: string;
    email: string;

    constructor({name, username, email}){
        this.name = name;
        this.username = username;
        this.email = email;
    }
}