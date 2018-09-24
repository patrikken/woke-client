import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import { AuthService } from './authservice.service';

@Injectable()
export class AuthPersonService {
  isLoggedin: boolean;

  constructor(private _http: HttpClient, ) {
    this.isLoggedin = true;
  }

  isLogged() {
    if (window.localStorage.getItem('type')) {
      if (window.localStorage.getItem('type') == "ROLE_PERSON") { return true; }
    }
    return false;
  }

}
