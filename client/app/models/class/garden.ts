import { User } from './user';
import { Seed } from './seed';

export class Garden {
    id: number;
    author: User;
    dateCreation: string;
    imagePath: string;
    experience: string;
    duration: string;
    seed: Seed;

    constructor(id: number, author: User, dateCreation: string, imagePath: string, experience: string, duration: string, seed: Seed) {
        this.id = id;
        this.author = author;
        this.dateCreation = dateCreation;
        this.imagePath = imagePath;
        this.experience = experience;
        this.duration = duration;
        this.seed = seed;
    }
}
