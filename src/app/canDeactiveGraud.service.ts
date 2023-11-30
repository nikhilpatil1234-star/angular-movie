import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
export interface IDeacticateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDeactivateGraurdService
  implements CanDeactivate<IDeacticateComponent>
{
  canDeactivate(
    component: IDeacticateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    return component.canExit();
  }
}
