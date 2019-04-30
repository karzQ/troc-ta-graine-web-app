import { Ad } from '../class/ad';
import { users } from './users-mock';
import { seeds } from './seeds-mock';

export const ads: Ad[] = [
    { id: 0, author: users[0], creationDate: new Date(), seedVariety: [seeds[0]], type: 'Echange' },
    { id: 1, author: users[1], creationDate: new Date(), seedVariety: [seeds[1]], type: 'Recherche' },
    { id: 2, author: users[2], creationDate: new Date(), seedVariety: [seeds[0]], type: 'Echange' },
    { id: 3, author: users[3], creationDate: new Date(), seedVariety: [seeds[1]], type: 'Recherche' },
    { id: 4, author: users[4], creationDate: new Date(), seedVariety: [seeds[0]], type: 'Echange' },
    { id: 5, author: users[5], creationDate: new Date(), seedVariety: [seeds[1]], type: 'Recherche' },
    { id: 6, author: users[0], creationDate: new Date(), seedVariety: [seeds[0]], type: 'Echange' },
    { id: 7, author: users[1], creationDate: new Date(), seedVariety: [seeds[1]], type: 'Recherche' },
    { id: 8, author: users[2], creationDate: new Date(), seedVariety: [seeds[0]], type: 'Echange' },
    { id: 9, author: users[3], creationDate: new Date(), seedVariety: [seeds[1]], type: 'Recherche' },
];
