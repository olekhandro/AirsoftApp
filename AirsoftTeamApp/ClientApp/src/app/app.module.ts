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

import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

import { GamesListComponent } from './games/games-list/games-list.component';
import { AddGameComponent} from './games/add-game/add-game.component'

import { TrainingListComponent } from './training/training-list/training-list.component';
import { AddTrainingComponent } from './training/add-training/add-training.component'; 

import { EventsListComponent } from './events/events-list/events-list.component';
import { AddEventComponent } from './events/add-event/add-event.component'

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
    AddGameComponent,

    TrainingListComponent,
    AddTrainingComponent,

    EventsListComponent,
    AddEventComponent,

    CalendarComponent,
    StatisticsComponent,
    MyProfileComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

      { path: 'users/list', component: UserListComponent },
      { path: 'users/add', component: AddUserComponent },
      
      { path: 'games/list', component: GamesListComponent },
      { path: 'games/add', component: AddGameComponent },

      { path: 'training/list', component: TrainingListComponent },
      { path: 'training/add', component: AddTrainingComponent },

      { path: 'events/list', component: EventsListComponent },
      { path: 'events/add', component: AddEventComponent },
      
      { path: 'calendar', component: CalendarComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'profile/myprofile', component: MyProfileComponent },
      { path: 'users/edit/:userId', component: EditUserComponent, data: { title: 'Edit User' }}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
