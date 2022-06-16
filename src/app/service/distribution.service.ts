import { EventEmitter, Injectable} from '@angular/core';
import { Distribution } from '../shared/distribution.model';

@Injectable({
  providedIn: 'root',
})
export class DistributionService {

  DriSelected = new EventEmitter<Distribution>();

  private distributions: Distribution[] = [
    new Distribution ('ปลาอินทรี',10),
    new Distribution ('หมึก',20)
  ];

  check: boolean = false;

  addNewOrder(newOrder: Distribution) {
    this.check = false;
    for (let index = 0; index < this.distributions.length; index++) {
      if (newOrder.name === this.distributions[index].name) {
        this.check = true;
      }
    }
    if (this.check === false) {
      this.distributions.push(new Distribution(newOrder.name,newOrder.quantity));
    }
    console.log(this.distributions)
  }

  updateQty(qty: Distribution) {
    for (let index = 0; index < this.distributions.length; index++) {
      if (qty.name === this.distributions[index].name) {
        this.distributions[index].quantity = Number(qty.quantity);
        this.check = true;
      }
    }
  }

  getDistridutions() {
    return this.distributions.slice();
  }
}
