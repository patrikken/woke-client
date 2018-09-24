import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
//import {Router, RouteData, RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  user;
  customer_info = {
    grant_type: "client_credentials",
    client_id: "2_4tetsaeihmecc0gscc8gokk88kcws8goksc4skk8ssc8kk0scc",
    client_secret: "5a14z4vd1sg8gs00wookw804cswwwgkgosgk8sswswokws4wko",
    username: "angular",
    password: "azertyui"
  }
  isLogged: boolean;
  baseURL = "http://localhost/GTecServer/web/app_dev.php/oauth/v2/token";
  role: string;
  constructor(private userService: UserService, private http: Http) {
    this.user = {
      id: -10,
      login: "",
      date: "",
      role: "",
      person: {
        id: 1,
        name: "",
        first_name: "",
        cni: "",
        phone: ""
      }
    }
    this.authentication();
    this.isLogged = false;
    this.role = localStorage.getItem('type');
    if (localStorage.getItem('auth_key')) {
      this.userService.getLoggedUser(atob(localStorage.getItem('auth_key'))).subscribe(
        posts => this.user = posts
      );
      this.isLogged = true;
    }
  }

  logout() {
    window.localStorage.removeItem("auth_key");
    window.localStorage.removeItem("type"); 
    location.replace('/');
  }

  authentication() {
    if (!localStorage.getItem("access_token")) {
      this.http.post(this.baseURL, this.customer_info)
        .subscribe((res) => {
          localStorage.setItem("access_token", btoa(res.json().access_token) );
        })
    }
  }

}

export interface User {
  id: 1;
  login: string;
  date: string;
  role: string;
  person: {
    id: number;
    name: string;
    first_name: string;
    cni: string;
    phone: string;
  }
}

