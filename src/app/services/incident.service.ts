import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import 'rxjs/add/operator/map';

@Injectable()
export class IncidentService {
    baseURL = "http://localhost/GTecServer/web/app_dev.php/api/incident";

    constructor(private http: HttpClient) {
        // console.log('Category service init');
    }

    get(id: number) {
        // return one speciality by id
        var id_user= atob(window.localStorage.getItem("auth_key"));
        return this.http.get(this.baseURL + "/"+id_user+"/" + id)
            .map(res => res.json())
    }

    getUserIncidents() {
        var id= atob(window.localStorage.getItem("auth_key"));
        // return one speciality by id
        return this.http.get(this.baseURL + "/getforuser/"+id)
            .map(res => res.json())
    }

    add(incident: incidentForm) {
        var id= atob(window.localStorage.getItem("auth_key"));
        return this.http.post(this.baseURL+"/"+id, incident)
            .map(res => res.json())
    }

    update(incident: incidentForm,id:number) {
        return this.http.put(this.baseURL+ "/" + id, incident)
            .map(res => res.json())
    }
}


interface incidentForm { 
    id_type:number;
    description:string;
}
