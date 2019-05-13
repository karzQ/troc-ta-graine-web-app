import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Test } from '../models/class/test';
import { catchError, map, tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs/observable/of';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  configUrl = 'api/ttg/user';

  /* getTests(): Observable<Test[]> {
    return observableOf(Tests);
  } */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return observableOf(result as T);
    };
  }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.configUrl).pipe(
      catchError(this.handleError('Check Tests', []))
    );
  }

  getTest(id: number): Observable<Test> {
    return this.http.get<Test>(`${this.configUrl}/read_one.php?id=${id}`).pipe(
      catchError(this.handleError<Test>('Check Test'))
    );
  }
}
