import { CanDeactivate } from '@angular/router';
import { DemandedevisComponent } from '../components/demandedevis/demandedevis.component';
import { Observable } from 'rxjs/Observable';


export interface CanCompononentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class ConfirmDeactivateGuard implements CanDeactivate<CanCompononentDeactivate> {

    canDeactivate(target: CanCompononentDeactivate) {
        if (target.canDeactivate) {
            if (target.canDeactivate()) {
                return window.confirm('Voullez vraiment quitter? Vos modifications seront perdus');
            }
        }
        return true;
    }
}