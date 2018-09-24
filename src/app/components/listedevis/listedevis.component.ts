import { Component, OnInit } from '@angular/core';
import { IncidentService } from './../../services/incident.service';
import { Router, ActivatedRoute } from "@angular/router"; 

@Component({
  selector: 'app-listedevis',
  templateUrl: './listedevis.component.html',
  styleUrls: ['./listedevis.component.css'],
  providers: [IncidentService]
})
export class ListedevisComponent implements OnInit {
  incident: Incidents;
  constructor(private incidentService: IncidentService, private route: ActivatedRoute,private _router: Router) {
    if(atob(localStorage.getItem("type"))!="ROLE_PERSON"){
          this._router.navigate(['/access-denied']);
    }
    this.incident={
        id: 0,
        description: "",
        date: new Date(),
        speciality_lines: [],
        devis: []
      };
    this.route.params.subscribe(params => {
      this.incidentService.get(params.id).subscribe(
        res => {
          this.incident = res;
        }
      );
    });
   }

  ngOnInit() { 
  }

  logout(){
    localStorage.clear();
  }

}
interface Incidents {
  id: number;
  description: string;
  date: Date;
  speciality_lines: Line[];
  devis: Devis[]
}

interface Line {
  id: number;
  obligated: boolean,
  type_speciality: {
    id: number,
    libelle: string,
    code: string
  }
}

interface Devis {
  id: number;
  description: string;
  date: Date;
  technician: Technician;
}

interface Technician {
  id: number;
  business_card: string;
  person: Person;
}

interface Person {
  id: number;
  name: string;
  first_name: string;
  cni: string;
  phone: string;
  user: User;
}

interface User {
  id: number;
  login: string;
  password: string;
  date: string;
  role: string;
}