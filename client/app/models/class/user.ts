export class User {
    id: number;
    lastName: string;
    firstName: string;
    accountCreationDate: string; // à transformer en date
    birthDate: string; // idem

    username: string;
    password: string;

    token?: string;
}
