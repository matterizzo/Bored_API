import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/models/Activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activityList: IActivity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public favorite(activity: IActivity){
    this.activityList.push(activity);
    localStorage.setItem('activityList', JSON.stringify(this.activityList));
  }

}
