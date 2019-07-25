
export enum UserRole {
  Командир = 1,
  Боец = 2
};

export namespace UserRole {

  export function values() {
    return Object.keys(UserRole).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

export enum UserState { Active, Deleted, Reserve }

export namespace UserState {

  export function values() {
    return Object.keys(UserState).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

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
  email: string;
  password: string;
}
