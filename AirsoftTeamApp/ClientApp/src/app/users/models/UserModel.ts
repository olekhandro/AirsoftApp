
enum UserRole { Командир, Боец };
enum UserState { Active, Deleted, Reserve }

export class UserModel {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  registrationDate: Date;
  state: UserState;
  photo: string;
  hasCar: boolean;
}
