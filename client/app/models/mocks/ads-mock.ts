import { Ad } from '../class/ad';
import { users } from './users-mock';
import { seeds } from './seeds-mock';

export const ads: Ad[] = [
    { id: 0, author: users[0], creationDate: '2019-03-11', seedVariety: [seeds[0]], type: 'trade' },
    { id: 1, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 2, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 3, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 4, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 5, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 6, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 7, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 8, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
    { id: 9, author: users[1], creationDate: '2019-11-22', seedVariety: [seeds[1]], type: 'search' },
];
