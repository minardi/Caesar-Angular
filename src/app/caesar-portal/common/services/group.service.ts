import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { environment } from '../../../../environments/environment';
import { Group } from '../../common/models/group';
import { User } from '../../common/models/user';
import { Location } from '../../common/models/location';

@Injectable()
export class GroupService {
    private headers: Headers;
    private options: RequestOptions;

    idCurrent = new BehaviorSubject<number>(null);

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    get(id: any): Observable<Group> {
        const search: URLSearchParams = new URLSearchParams();
        search.set('id', id);

        return this.http.get(`${environment.serviceApi.groupsUrl}/${id}`).
            map(result => this.extractGroupsData(result.json()));
    }

    getLocation(url: string): Observable<Location> {
        return this.getData(url);
    }

    getParametr(url: string): Observable<string[]> {
        return this.getData(url);
    }

    getData(url: string) {
        url = url.replace('http://caeser-api.com:8080', '');
        return this.http.get(url).map(result => result.json());
    }

    getUserGroups(): Observable<Group[]> {
        return this.http.get(environment.serviceApi.myGroupsUrl).
            map(result => result.json().map(obj => this.extractGroupsData(obj)));
    }

    getGroupsByLocations(locationIds: number[]): Observable<Group[]> {
        const data = { locations: locationIds };

        return this.http.post(environment.serviceApi.filterGroupsUrl, data, this.options).
            map(result => result.json().map(obj => this.extractGroupsData(obj)));
    }

    getCurrentLocationGroups(): Observable<Group[]> {
        return this.http.get(environment.serviceApi.groupsMyLocationUrl).
            map(result => result.json().map(obj => this.extractGroupsData(obj)));
    }

    delete(id: number) {
        return this.http.delete(`${environment.serviceApi.groupsUrl}/${id}`);
    }

    private extractGroupsData(obj) {
        return new Group(obj.groupId, obj.name, obj.startDate, obj.finishDate, obj.experts, obj._links);
    }

    changeIdCurrent(id: number) {
        this.idCurrent.next(id);
    }

    getIdCurrent(): Observable<number> {
        return this.idCurrent.asObservable();
    }

    public create(group: any) {
        const groupJSON = JSON.stringify(group),
            headers = new Headers({
                'Content-Type': 'application/json'
            });
        return this.http.post(environment.serviceApi.groupsUrl, groupJSON, { headers: headers });
    }

    public update(group: any, groupId: number) {
        const groupJSON = JSON.stringify(group),
            headers = new Headers({
                'Content-Type': 'application/json'
            });
        return this.http.put(`${environment.serviceApi.groupsUrl}/${groupId}`, groupJSON, { headers: headers });
    }
}
