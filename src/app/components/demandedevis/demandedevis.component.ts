import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { IncidentService } from './../../services/incident.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-demandedevis',
  templateUrl: './demandedevis.component.html',
  styleUrls: ['./demandedevis.component.css'],
  providers: [CategoryService, IncidentService]
})
export class DemandedevisComponent {
  categories: category[];
  incident: Incident;
  deactivate: boolean;
  constructor(private categoryService: CategoryService, private incidentService: IncidentService, private _router: Router) {
    if (atob(localStorage.getItem("type")) != "ROLE_PERSON") {
      this._router.navigate(['/access-denied']);
    }
    this.categoryService.getCategory().subscribe(
      posts => {
        this.categories = posts;
      }
    );
    this.incident = {
      id_type: 0,
      description: ""
    }
    this.deactivate = false;
  }

  save() {
    this.incidentService.add(this.incident).subscribe(
      res => {
        if (res.error) {
          alert("an error" + " " + res.msg);
        } else {
          this.deactivate = true;
          this._router.navigate(['/list-incident']);
        }
      }
    );
    //window.localStorage.removeItem("incident");
    //alert('stokeed successfful');
  }

  canDeactivate() {
    if ((this.incident.id_type == 0 && this.incident.description == "") || this.deactivate) {
      return false;
    }
    return true;
  }

}

interface category {
  id: number;
  libelle: string;
  code: string;
}

interface Incident {
  id_type: number;
  description: string;
}
