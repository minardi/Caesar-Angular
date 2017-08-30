///<reference path="../../../../../node_modules/@angular/http/src/http.d.ts"/>
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Location } from '../models/location';
import { environment } from '../../../../environments/environment';
import { Direction } from '../models/direction';
import { BudgetOwner } from '../models/budgetOwner';
import { Stage } from '../models/stage';

@Injectable()
export class GroupInfoService {

  private mockDirection = [
    {
      id: 1,
      name: 'WebUI'
    },
    {
      id: 2,
      name: 'JavaScript (UI)'
    },
    {
      id: 3,
      name: 'LAMP'
    },
    {
      id: 4,
      name: ' .Net'
    },
    {
      id: 5,
      name: 'Java'
    },
    {
      id: 6,
      name: 'Go'
    },
    {
      id: 7,
      name: 'Python'
    },
    {
      id: 8,
      name: 'iOS'
    },
    {
      id: 9,
      name: 'C/C++'
    },
    {
      id: 10,
      name: 'Deplhi'
    },
    {
      id: 11,
      name: 'RDBMS'
    },
    {
      id: 12,
      name: 'MQC'
    },
    {
      id: 13,
      name: 'ATQC'
    },
    {
      id: 14,
      name: 'ISTQB'
    },
    {
      id: 15,
      name: 'SET'
    },
    {
      id: 16,
      name: 'DevOps'
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

  // Checking group details
  public getGroupLocation(url: string): Observable<Location> {
    return this.http.get(url).
    map((response: Response) => {
      return <Location>response.json();
    }).catch(this.handleError);
  }
  public getGroupDirection(url: string): Observable<Direction> {
    return this.http.get(url).
    map((response: Response) => {
      return <Direction>response.json();
    }).catch(this.handleError);
  }
  public getGroupStatus(url: string): Observable<any> {
    return this.http.get(url).
    map((response: Response) => {
      return <any>response.json();
    }).catch(this.handleError);
  }
  public getGroupTeachers(url: string): Observable<any> {
    return this.http.get(url).
    map((response: Response) => {
      return <any>response.json();
    }).catch(this.handleError);
  }
  public getGroupBudgetOwner(url: string): Observable<any> {
    return this.http.get(url).
    map((response: Response) => {
      return <any>response.json();
    }).catch(this.handleError);
  }
}
