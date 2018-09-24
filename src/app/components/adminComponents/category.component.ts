import { Component } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-category',
  templateUrl: './views/category.component.html',
  providers: [CategoryService]
})
export class CategoryComponent {
  categories: category[];
  modalActions = new EventEmitter<string | MaterializeAction>();
  newCategory: category;

  constructor(private categoryService: CategoryService,private _router:Router) {
    if (atob(window.localStorage.getItem("type")) != "ROLE_ADMIN") {
      this._router.navigate(['/access-denied']);
    }
    this.initCategories(); 
  }
  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  initCategories() {
    this.categoryService.getCategory().subscribe(
      posts => {
        this.categories = posts;
      }
    )
    this.newCategory = {
      id: 0,
      libelle: "",
      code: "",
    }
  }

  deleteCategories(id: number) {
    var i = confirm("Voulez vous vraiment supprimer ?");
    if (i) {
      this.categoryService.delete(id).subscribe(
        posts => { 
          this.initCategories();
        }
      );
    } else {
      console.log("noting deleted");
    } 
  }

  addCategory() { 
      this.categoryService.addCategory(this.newCategory).subscribe(
        posts => { 
          this.initCategories();
          this.closeModal();
        }
      ); 
  }

  logout(){
    window.localStorage.removeItem('auth_key');
    this._router.navigate(['login']);
  }
  

}

interface category {
  id: number;
  libelle: string;
  code: string;
}

