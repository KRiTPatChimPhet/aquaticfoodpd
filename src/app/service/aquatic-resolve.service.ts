import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AquaticFood } from '../aquatic-food/aquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';

@Injectable({
  providedIn: 'root'
})
export class AquaticResolveService implements Resolve<AquaticFood> {

  constructor(private aquaticService:AquaticFoodService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AquaticFood | Observable<AquaticFood> | Promise<AquaticFood> {
      return this.aquaticService.openDescription(route.params['name'])!
  }
}
