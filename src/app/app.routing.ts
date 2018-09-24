import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaterUserComponent } from './components/createUser.component';
import { HomeComponent } from './components/home.component';
import { ProFormComponent } from './components/proForm.component';
import { AdminHomeComponent } from './components/adminComponents/adminHome.components';
import { CategoryComponent } from './components/adminComponents/category.component';
import { SpecialityComponent } from './components/adminComponents/speciality.component';
import { LoginComponent } from './components/login/login.component';
import { DemandedevisComponent } from './components/demandedevis/demandedevis.component';
import { ListeIncidentComponent } from './components/liste-incident/liste-incident.component';
import { ListedevisComponent } from './components/listedevis/listedevis.component';
import { CanActivateViaAuthGuard } from './guard/canActivate.guard';
import { ConfirmDeactivateGuard } from './guard/canDeactivate.guard';
import { AccesDeniedComponent } from './components/acces-denied/acces-denied.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'create-account',
        component: CreaterUserComponent
    },
    {
        path: 'access-denied',
        component: AccesDeniedComponent
    },
    {
        path: 'pro/register',
        component: ProFormComponent
    },
    {
        path: 'admin',
        component: CategoryComponent,
        canActivate: [CanActivateViaAuthGuard] 
    },
    {
        path: 'admin/category',
        component: CategoryComponent,
        canActivate: [CanActivateViaAuthGuard] 
    },
    {
        path: 'admin/speciality/:id',
        component: SpecialityComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'new-devis',
        component: DemandedevisComponent,
        canActivate: [CanActivateViaAuthGuard],
        canDeactivate: [ConfirmDeactivateGuard]
    },
    {
        path: 'list-incident',
        component: ListeIncidentComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'list-devis/:id',
        component: ListedevisComponent,
        canActivate: [CanActivateViaAuthGuard]
    } 
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);