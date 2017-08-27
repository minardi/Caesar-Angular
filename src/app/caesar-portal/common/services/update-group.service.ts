import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Location } from '../models/location';
import { environment } from '../../../../environments/environment';
import { Direction } from '../models/direction';
import { BudgetOwner } from '../models/budgetOwner';
import { Stage } from '../models/stage';

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
      name: 'ISTQB'
    },
    {
      id: 5,
      name: 'MQC'
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
  ];

  private mockStage = [
    {
      id: 1,
      name: 'Planned'
    },
    {
      id: 2,
      name: 'Boarding'
    },
    {
      id: 3,
      name: 'Before start'
    },
    {
      id: 4,
      name: 'In process'
    },
    {
      id: 5,
      name: 'Offering'
    },
    {
      id: 6,
      name: 'Graduated'
    },
    {
      id: 7,
      name: 'Cancelled'
    }
  ];

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

  public getStages(): Observable<Stage[]> {
    return Observable.of(this.mockStage);
  }

  public update(group: any) {
    const groupJSON = JSON.stringify(group),
      headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(environment.serviceApi.groupsUrl, groupJSON, { headers: headers });
  }
}
