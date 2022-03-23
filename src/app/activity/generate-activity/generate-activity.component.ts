import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IActivity } from 'src/app/models/Activity';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.css']
})
export class GenerateActivityComponent implements OnInit {

  activityList!: IActivity;
  @Output() favoriteActivity = new EventEmitter<IActivity>()

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    try{
      this.activityList = JSON.parse(localStorage.getItem('activityList') || '[]')
    }catch(error){
      console.error('no data')
    }
  }

  public generate(): any{
    this.requestService.getRequest().subscribe((data) => {
      this.activityList = data;
      console.log(this.activityList)
    });      
  }

  public favorite(activityList: IActivity): void{
    this.favoriteActivity.emit(activityList)
  }

}
