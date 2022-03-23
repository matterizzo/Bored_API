import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  public getRequest (){
    return this.httpClient.get('https://www.boredapi.com/api/activity') as Observable<IActivity>
  }

}
