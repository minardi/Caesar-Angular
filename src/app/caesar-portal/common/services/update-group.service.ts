import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Location } from '../models/location';
import { environment } from '../../../../environments/environment';
import { Direction } from '../models/direction';
import { BudgetOwner } from '../models/budgetOwner';

@Injectable()
export class UpdateGroupService {

  private mockDirection = [
    {
      id: 1,
      name: 'oop-java-core'
    },
    {
      id: 2,
      name: 'js-core'
    },
    {
      id: 3,
      name: 'web_C#_.net'
    },
    {
      id: 4,
      name: 'testing_ISTQB'
    }
  ];

  private mockBudgetOwner = [
    {
      id: 1,
      name: 'SoftServe'
    },
    {
      id: 2,
      name: 'Open Group'
    }
  ]

  constructor(private http: Http) { }

  public getLocations(): Observable<Location[]> {
    return this.http.get(environment.serviceApi.locationsUrl).
    map((response: Response) => {
      return <Location[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  public getDirections(): Observable<Direction[]> {
    return Observable.of(this.mockDirection);
  }

  public getBudgetOwners(): Observable<BudgetOwner[]> {
    return Observable.of(this.mockBudgetOwner);
  }
}
