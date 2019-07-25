import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/UserService";
import { UserModel, UserRole, UserState } from "../models/UserModel";
import { Observable, throwError } from 'rxjs'

@Component({
  selector: 'add-user-component',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {
  isExpanded = false;
  public model: UserModel;
  userRole = UserRole;
  userState = UserState;

  constructor(private userService: UserService) {
    this.model = new UserModel();
  }

  ngOnInit() {
  }
}
