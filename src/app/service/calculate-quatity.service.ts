import { Injectable } from '@angular/core';
import { AquaticFoodService } from './aquatic-food.service';
import { DistributionService } from './distribution.service';

@Injectable({
  providedIn: 'root',
})
export class CalculateQuatityService {
  constructor(
    private aquaticFoodService: AquaticFoodService,
    private distributionService: DistributionService
  ) {}

  Aquantity = this.aquaticFoodService.getAquaticFoods();
  Dquantity = this.distributionService.getDistridutions();

  calculate(){
    let qty = 0
    for (let j = 0; j < this.Aquantity.length; j++){
      for (let i = 0; i < this.Dquantity.length; i++) {
        if (this.Dquantity[i].name === this.Aquantity[j].name.trim()) {
          qty = this.Aquantity[j].quantity - this.Dquantity[i].quantity;
        }
      }
    }return qty
  }


}
