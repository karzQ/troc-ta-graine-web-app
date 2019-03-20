export class User {
    id: number;
    lastName: string;
    firstName: string;
    accountCreationDate: string; // à transformer en date
    birthDate: string; // idem

    username: string;
    password: string;

    token?: string;

    constructor(id: number, lastName: string, firstName: string, accountCreationDate: string, birthDate: string, username: string, password: string, token?: string) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.accountCreationDate = accountCreationDate;
        this.birthDate = birthDate;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}
