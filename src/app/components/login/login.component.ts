import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  param: Params;
  invalidCreds:boolean;
  constructor(private _service: AuthService, private _router: Router) {

  }

  ngOnInit() {
    this.param = {
      login: "",
      password: ""
    }
    this.invalidCreds=false;
  }

  login() {
    this._service.login(this.param).then((res) => { 
      if (res) {
        this.invalidCreds=false;
        var role=atob(window.localStorage.getItem("type"));
        if (role == "ROLE_PERSON") {
          location.replace('/new-devis');
          //this._router.navigate(['/new-devis'])
        } else {
          if(role== "ROLE_ADMIN"){
            this._router.navigate(['/admin'])
          }else{
            location.replace('/');
          }
        }

      } else {
        this.invalidCreds=true;
      }
    })
  }


}

interface Params {
  login: string;
  password: string;
}
