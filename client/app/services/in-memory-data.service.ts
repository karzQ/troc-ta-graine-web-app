import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Tests = [
      { id: 1, name: 'Test' },
      { id: 2, name: 'Test' },
      { id: 3, name: 'Test' },
      { id: 4, name: 'Test' },
      { id: 5, name: 'Test' },
      { id: 6, name: 'Test' },
      { id: 7, name: 'Test' },
      { id: 8, name: 'Test' },
      { id: 9, name: 'Test' },
    ];

    return Tests;
  }
}
