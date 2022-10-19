import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "src/app/core/service/data-storage.service";
import { AquaticFood } from "src/app/core/type/aquatic-food.model";

@Injectable({
  providedIn: 'root',
})

export class AquaticResolverService implements Resolve<AquaticFood[]> {

  constructor(private _dataStorageService: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AquaticFood[] | Observable<AquaticFood[]> | Promise<AquaticFood[]> {
    return this._dataStorageService.fetchAquatic();
  }
}
