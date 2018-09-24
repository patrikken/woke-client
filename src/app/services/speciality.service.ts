import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SpecialityService {
    baseURL = "http://localhost/GTecServer/web/app_dev.php/api/speciality";

    constructor(private http: HttpClient) {
        // console.log('Category service init');
    }

    getAll() {
        return this.http.get(this.baseURL)
            .map(res => res.json())
    }
     
    getAllByType(id_category: number) {
        // return the list of specialities of an category speciality identify by id_category
        return this.http.get(this.baseURL + "/type/" + id_category)
            .map(res => res.json())
    }
    get(id: number) {
        // return one speciality by id
        return this.http.get(this.baseURL + "/" + id)
            .map(res => res.json())
    }

    delete(id: number) {
        return this.http.delete(this.baseURL + "/" + id)
            .map(res => res.json())
    }

    add(cat: specialityForm) {
        return this.http.post(this.baseURL, cat)
            .map(res => res.json())
    }

    update(cat: specialityForm,id:number) {
        return this.http.put(this.baseURL+ "/" + id, cat)
            .map(res => res.json())
    }
}

interface speciality {
    id: number;
    libelle: string;
    description: string;
    speciality_type: category;
    id_speciality_type: number;
}

interface specialityForm { 
    libelle: string;
    description: string;
    id_speciality_type: number;
}

interface category {
    id: number;
    libelle: string;
    code: string;
}