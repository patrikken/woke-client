import { Component } from '@angular/core';
import { ProService } from './../services/pro.service';

@Component({
  selector: 'pro-form',
  templateUrl: './views/proForm.component.html',
  providers: [ProService] 
})
export class ProFormComponent {
  newUser: Pro;
  errors: Error;
  constructor(private userService: ProService) {
    this.newUser = {
      email: "",
      password: "",
      cni: "",
      firstName: "",
      name: "",
      phone: "",
      businessCard :""
    };

    this.errors = {
      name: "",
      firstName: "",
      cni: "",
      phone: "",
      password: "",
      login: "",
      businessCard :""
    }
  }

  save(){
    this.userService.addUser(this.newUser).subscribe(
      posts =>  this.errors=posts
    );
  }
}


interface Pro {
  email: string;
  password: string;
  cni: string;
  firstName: string;
  name: string;
  phone: string;
  businessCard: string;
}

interface Error {
  name: string;
  firstName: string;
  cni: string;
  phone: string;
  password: string;
  login: string;
  businessCard: string;
}