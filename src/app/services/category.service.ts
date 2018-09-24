import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    baseURL = "http://localhost/GTecServer/web/app_dev.php/api/typespeciality";

    constructor(private http: HttpClient) {
        // console.log('Category service init');
    }

    getCategory() {
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

    addCategory(cat: category) {
        return this.http.post(this.baseURL, cat)
            .map(res => res.json())
    }

    updateCategory(cat: category) {
        return this.http.put(this.baseURL, cat)
            .map(res => res.json())
    }
}

interface category {
    id: number;
    libelle: string;
    code: string;
}