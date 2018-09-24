import { Component, OnInit } from '@angular/core';
import { IncidentService } from './../../services/incident.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-liste-incident',
  templateUrl: './liste-incident.component.html',
  styleUrls: ['./liste-incident.component.css'],
  providers: [IncidentService]

})
export class ListeIncidentComponent implements OnInit {


  incidents: Incidents[];
  constructor(private incidentService: IncidentService, private _router: Router) {
    if (atob(localStorage.getItem("type")) != "ROLE_PERSON") {
      this._router.navigate(['/access-denied']);
    }
    this.incidents=[]
  }

  ngOnInit() { 
    this.incidentService.getUserIncidents().subscribe(
      res => {
        this.incidents = res;
      }
    );
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
}