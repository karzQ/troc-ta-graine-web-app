export class User {
    id?: number;
    lastName?: string;
    firstName?: string;
    accountCreationDate?: Date; // à transformer en date
    birthDate?: Date; // idem

    email?: string;
    username?: string;
    password?: string;

    token?: string;

    constructor(id?: number, lastName?: string, firstName?: string, accountCreationDate?: Date, birthDate?: Date,
        email?: string, username?: string, password?: string, token?: string) {

        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.accountCreationDate = accountCreationDate;
        this.birthDate = birthDate;
        this.email = email;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}
