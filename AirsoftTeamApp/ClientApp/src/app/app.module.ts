import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserListComponent } from './user-list/user-list.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MyProfileComponent } from './profile/myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserListComponent,
    GamesListComponent,
    TrainingListComponent,
    EventsListComponent,
    CalendarComponent,
    StatisticsComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'games/list', component: GamesListComponent },
      { path: 'training/list', component: TrainingListComponent },
      { path: 'events/list', component: EventsListComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'profile/myprofile', component: MyProfileComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
