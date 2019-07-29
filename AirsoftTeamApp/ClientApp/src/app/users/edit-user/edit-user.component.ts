import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/UserService";
import { UserModel, UserRole, UserState } from "../models/UserModel";
import { Observable, throwError } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'edit-user-component',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent {
  isExpanded = false;
  public model: UserModel;
  userRole = UserRole;
  userState = UserState;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.userService.GetUserById(this.route.snapshot.params['userId']).subscribe(user =>
      this.model = user);
  }

  onSubmit() {
    this.userService.AddUser(this.model).subscribe(result => {
      this.router.navigate(['/users/list']);
    });
  }
}
