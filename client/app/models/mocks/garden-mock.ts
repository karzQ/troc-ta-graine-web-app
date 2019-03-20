import { Garden } from '../class/garden';
import { users } from './users-mock';
import { seeds } from './seeds-mock';

export const gardens: Garden[] = [
    { id: 0, author: users[0], dateCreation: '03/03/2019', imagePath: '#', experience: 'Blablabla', duration: '2 mois', seed: seeds[0] },
    { id: 0, author: users[1], dateCreation: '03/03/2019', imagePath: '#', experience: 'Blablabla', duration: '2 mois', seed: seeds[0] },
    { id: 0, author: users[2], dateCreation: '03/03/2019', imagePath: '#', experience: 'Blablabla', duration: '2 mois', seed: seeds[0] },
    { id: 0, author: users[3], dateCreation: '03/03/2019', imagePath: '#', experience: 'Blablabla', duration: '2 mois', seed: seeds[0] },
    { id: 0, author: users[4], dateCreation: '03/03/2019', imagePath: '#', experience: 'Blablabla', duration: '2 mois', seed: seeds[0] },
    { id: 0, author: users[5], dateCreation: '03/03/2019', imagePath: '#', experience: 'Blablabla', duration: '2 mois', seed: seeds[0] },
]