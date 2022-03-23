import { Component, Input, OnInit } from '@angular/core';
import { IActivity } from 'src/app/models/Activity';

@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.css']
})
export class FavoriteActivityComponent implements OnInit {

  @Input() activityList!: IActivity[];

  constructor() { }

  ngOnInit(): void {
    try{
      const locStorage = localStorage.getItem('activityList');
      if (locStorage != null) this.activityList = JSON.parse(locStorage)
    }catch(error){
      console.error(error)
    }
  }
  

}
