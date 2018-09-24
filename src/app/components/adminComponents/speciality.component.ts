import { Component } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { SpecialityService } from './../../services/speciality.service';
import { ActivatedRoute } from "@angular/router";
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-speciality',
  templateUrl: './views/specialty.component.html',
  providers: [CategoryService, SpecialityService]
})
export class SpecialityComponent {
  speciality_type: category;
  modalActions = new EventEmitter<string | MaterializeAction>();
  new: specialityForm;
  id_category: number;
  specialities: speciality[];
  edited: boolean;
  categories: category[];

  constructor(private categoryService: CategoryService,private _router:Router, private specialityService: SpecialityService, private route: ActivatedRoute) {
    if (atob(window.localStorage.getItem("type")) != "ROLE_ADMIN") {
      this._router.navigate(['/access-denied']);
    }
    this.speciality_type = {
      id: 0,
      libelle: "",
      code: "",
    }
    // we get the routes parameters value and make initialisation 
    this.route.params.subscribe(params => {
      this.id_category = params.id;
      this.categoryService.get(this.id_category).subscribe(
        posts => {
          this.speciality_type = posts;
        }
      );
      this.init();
    });
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  init() {
    this.edited = false;

    this.new = {
      id: 0,
      libelle: "",
      description: "",
      id_speciality_type: this.id_category
    }

    this.specialityService.getAllByType(this.id_category).subscribe(
      posts => {
        this.specialities = posts;
      }
    ); 

    this.categoryService.getCategory().subscribe(
      posts => {
        this.categories = posts;
      }
    )
  }

  delete(id: number) {
    var i = confirm("Voulez vous vraiment supprimer ?");
    if (i) {
      this.specialityService.delete(id).subscribe(
        posts => {
          console.log(posts);
          this.init();
        }
      );
    } else {
      console.log("noting deleted");
    }
  }

  edit(id:number){
    this.edited=true;
    var spec=this.specialities[id];
    this.new = {
      id: spec.id,
      libelle: spec.libelle,
      description: spec.description,
      id_speciality_type: spec.speciality_type.id
    }
    this.openModal()
  }
  
  add(){
    this.edited=false; 
    this.new = {
      id: 0,
      libelle: "",
      description: "",
      id_speciality_type: this.id_category
    }
    this.openModal()
  }

  sendtoserver() {
    if (!this.edited) {
      this.specialityService.add(this.new).subscribe(
        posts => {
          console.log(posts);
          this.init();
          this.closeModal();
        }
      );
    }else{
      this.specialityService.update(this.new, this.new.id).subscribe(
        posts => {
          console.log(posts);
          this.init();
          this.closeModal();
        }
      );
    }
  }


}

interface specialityForm {
  id: number;
  libelle: string;
  description: string;
  id_speciality_type: number;
}

interface speciality {
  id: number;
  libelle: string;
  description: string;
  speciality_type: category;
}

interface category {
  id: number;
  libelle: string;
  code: string;
}

