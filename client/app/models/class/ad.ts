import { User } from './user';
import { Seed } from './seed';

export class Ad {
    id: number;
    author: User;
    creationDate: string; // à transformer en date
    seedVariety: Seed[];
    type: string; // différents types: search, gift, trade
}
