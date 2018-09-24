import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    baseURL = "http://localhost/GTecServer/web/app_dev.php/api/user";

    constructor(private http: HttpClient) {
        // console.log('Category service init');
    }

    getAll() {
        return this.http.get(this.baseURL)
            .map(res => res.json())
    }

    delete(id: number) {
        return this.http.delete(this.baseURL + "/" + id)
            .map(res => res.json())
    }

    getLoggedUser(id) {
        return this.http.get(this.baseURL + "/getLogged/" + id)
            .map(res =>  res.json())
    }

    get(id: number) {
        return this.http.get(this.baseURL + "/" + id)
            .map(res =>  res.json())
    }

    addUser(user: User) {
        return this.http.post(this.baseURL, user)
            .map(res => res.json())
    }

    update(user: User) {
        return this.http.put(this.baseURL, user)
            .map(res => res.json())
    }
}

interface User {
    email: string;
    password: string;
    cni: string;
    firstName: string;
    name: string;
    phone: string;
  }