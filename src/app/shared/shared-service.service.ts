import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../signin/model/user'

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private userData = new Subject()
  constructor() { }

  addUserData(data: IUser) {
    this.userData.next(data);
  }

  getUserData() {
    return this.userData.asObservable();
  }
}
