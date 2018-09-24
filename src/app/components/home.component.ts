import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'home',
  templateUrl: './views/home.component.html',
  providers: [UserService]
})

export class HomeComponent { 
  constructor() { }
}
