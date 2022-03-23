import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GenerateActivityComponent } from '../activity/generate-activity/generate-activity.component';
import { FavoriteActivityComponent } from '../activity/favorite-activity/favorite-activity.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ActivityModule } from '../activity/activity.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ActivityModule,
    HttpClientModule
  ]
})
export class HomeModule { }
