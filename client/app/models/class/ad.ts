import { User } from './user';
import { Seed } from './seed';

export class Ad {
    id: number;
    author: User;
    creationDate: Date; // à transformer en date
    seedVariety: Seed[];
    type: string; // différents types: search, gift, trade
    geolocalisation?: [string, string]; // X_axis, Y_axis

    constructor(id: number, author: User, creationDate: Date, seedVariety: Seed[], type: string, geolocalisation?: [string, string]) {
        this.id = id;
        this.author = author;
        this.creationDate = creationDate;
        this.seedVariety = seedVariety;
        this.type = type;
        this.geolocalisation = geolocalisation;
    }
}
