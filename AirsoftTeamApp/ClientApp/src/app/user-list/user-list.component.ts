import { Component } from '@angular/core';

@Component({
  selector: 'user-list-component',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  isExpanded = false;
  
}
enum UserRole {Командир, Боец};
enum UserState {Active, Deleted, Reserve}

class User {
  Id: number;
  UserName: string;
  FirstName: string;
  LastName: string;
  Role: UserRole;
  RegistrationDate: Date;
  State: UserState;
  Photo: string;
  HasCar: boolean;
}
