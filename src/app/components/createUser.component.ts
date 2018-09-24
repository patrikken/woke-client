import { Component } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './views/userForm.component.html',
  providers: [UserService]
})
export class CreaterUserComponent {
  newUser: User;
  errors: Error;
  rForm: FormGroup;
  name: string = '';
  email: string = '';
  password: string = '';
  cni: string = '';
  firstName: string = '';
  phone: string = '';
  constructor(private userService: UserService, private _router: Router, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'firstName': [null, Validators.required],
      'cni': [null, Validators.required],
      'phone': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(500)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])]
    });
    this.newUser = {
      email: "",
      password: "",
      cni: "",
      firstName: "",
      name: "",
      phone: ""
    };

    this.errors = {
      name: "",
      firstName: "",
      cni: "",
      phone: "",
      password: "",
      login: ""
    }
  }

  save(value) {
    /*  this.newUser = {
        email: value.email,
        password: value.password,
        cni: value.cni,
        firstName: value.firstName,
        name: value.name,
        phone: value.phone
      };*/
    this.userService.addUser(this.newUser).subscribe(
      posts => {
        if (!posts.status) // when server return errors in data
        {
          this.errors = posts
        }
        else {
          alert(posts.msg)
          this._router.navigate(['/login']);
        }

      }
    );
  }

 /* canDeactivate() {
    if ((this.user.name == 0 && this.incident.description == "") || this.deactivate) {
      return false;
    }
    return true;
  }*/
}


interface User {
  email: string;
  password: string;
  cni: string;
  firstName: string;
  name: string;
  phone: string;
}

interface Error {
  name: string;
  firstName: string;
  cni: string;
  phone: string;
  password: string;
  login: string;
}