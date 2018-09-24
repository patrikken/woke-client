import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';

@Injectable()
export class AuthService {
  isLoggedin: boolean;

  constructor(private _http: HttpClient) {
    this.isLoggedin = true;
  }

  login(usercreds) {
    return new Promise((resolve) => {
      this.isLoggedin = false;
      this._http.post("http://localhost/GTecServer/web/app_dev.php/api/authenticate", usercreds).subscribe((data) => {
        // alert(data.json().error)  
        if (data.json().error == 1) {
          window.localStorage.setItem('auth_key', btoa(data.json().user.id));
          window.localStorage.setItem('type', btoa(data.json().user.role));
          this.isLoggedin = true;
        }
        resolve(this.isLoggedin);
      })
    })
  }

  isLogged() {
    if (window.localStorage.getItem('auth_key')) {
      return true;
    }
    return false;
  }
}
