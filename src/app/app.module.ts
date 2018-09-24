import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CreaterUserComponent } from './components/createUser.component';
import { ProFormComponent } from './components/proForm.component';
import { AdminHomeComponent } from './components/adminComponents/adminHome.components';
import { CategoryComponent } from './components/adminComponents/category.component';
import { SpecialityComponent } from './components/adminComponents/speciality.component';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { DemandedevisComponent } from './components/demandedevis/demandedevis.component';
import { ListeIncidentComponent } from './components/liste-incident/liste-incident.component';
import { ListedevisComponent } from './components/listedevis/listedevis.component';
import { CanActivateViaAuthGuard } from './guard/canActivate.guard';
import { AuthService } from './services/authservice.service';
import { ConfirmDeactivateGuard } from './guard/canDeactivate.guard';
import { AccesDeniedComponent } from './components/acces-denied/acces-denied.component';
import { HttpClient } from './services/httpClient.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CreaterUserComponent,
    ProFormComponent, AdminHomeComponent, CategoryComponent, SpecialityComponent, LoginComponent, DemandedevisComponent, ListeIncidentComponent, ListedevisComponent, AccesDeniedComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTableModule, MatSortModule, MatInputModule, MaterializeModule, routing, HttpModule, FormsModule, MatSelectModule,ReactiveFormsModule
  ],
  providers: [CanActivateViaAuthGuard,AuthService,ConfirmDeactivateGuard,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { } 
 
