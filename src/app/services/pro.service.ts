import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ProService {
    baseURL = "http://localhost/GTecServer/web/app_dev.php/api/technician";

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

    get(id: number) {
        return this.http.get(this.baseURL + "/" + id)
            .map(res =>  res.json())
    }

    addUser(pro: Pro) {
        return this.http.post(this.baseURL, pro)
            .map(res => res.json())
    }

    update(pro: Pro) {
        return this.http.put(this.baseURL, pro)
            .map(res => res.json())
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