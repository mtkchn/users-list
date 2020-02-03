import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../db/db';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fetchUsers(): User[] {
    return USERS;
  }

  fetchUser(id: number) {
    return this.fetchUsers().find(user => user.id === id);
  }

  addNewUser(user) {
    console.log('USERS.length', USERS.length);
    user.id = USERS.length + 2;
    USERS.push(user);
  }

}
