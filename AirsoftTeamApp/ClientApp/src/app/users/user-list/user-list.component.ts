import { Component, OnInit} from '@angular/core';
import { UserService } from "../services/UserService";
import { UserModel } from "../models/UserModel";
import { Observable, throwError } from 'rxjs'

@Component({
  selector: 'user-list-component',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  isExpanded = false;
  public users : Observable<UserModel[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.GetAllUsers();
  }

  public GetAllUsers() {
    this.users = this.userService.GetAllUsers();
  }
}
