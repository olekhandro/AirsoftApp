import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/UserService";
import { UserModel, UserRole, UserState } from "../models/UserModel";
import { Observable, throwError } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'add-user-component',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  isExpanded = false;
  public model: UserModel;
  userRole = UserRole;
  userState = UserState;

  constructor(private userService: UserService, private router: Router) {
    this.model = new UserModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.AddUser(this.model).subscribe(result => {
      this.router.navigate(['/users/list']);
    });
  }
}
