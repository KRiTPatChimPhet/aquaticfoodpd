import { EventEmitter, Injectable } from '@angular/core';
import { Distribution } from 'src/app/core/type/distribution.model';

@Injectable({
  providedIn: 'root',
})
export class DistributionService {

  driSelected = new EventEmitter<Distribution>();

  check: boolean = false;

  private distributions: Distribution[] = [
    new Distribution('ปลาอินทรี', 10),
    new Distribution('หมึก', 20)
  ];

  addNewOrder(newOrder: Distribution): boolean {
    this.check = false;
    for (let index = 0; index < this.distributions.length; index++) {
      if (newOrder.name === this.distributions[index].name) {
        this.check = true;
      }
    }
    if (this.check === false) {
      this.distributions.push(new Distribution(newOrder.name, newOrder.quantity));
    }
    return this.check;
  }

  addValueOnInput(value: string): Distribution | undefined {
    const dis = this.distributions.find(
      (v) => {
        return v.name == value;
      }
    );
    return dis;
  }

  updateQty(qty: Distribution): void {
    for (let index = 0; index < this.distributions.length; index++) {
      if (qty.name === this.distributions[index].name) {
        this.distributions[index].quantity = Number(qty.quantity);
        this.check = true;
      }
    }
  }

  getDistridutions(): Distribution[] {
    return this.distributions;
  }

  deleteData(name: string): void {
    this.distributions.map((value: Distribution, index: number) => {
      if (name === value.name) {
        this.distributions.splice(index, 1);
      }
    })
  }
}
