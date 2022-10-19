import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Injectable } from "@angular/core"
import { Subject } from "rxjs";
import { AquaticFood } from "src/app/core/type/aquatic-food.model";
@Injectable()
export class AquaticFoodService {

  aquaticFoodSubject = new Subject<boolean>();
  aquaticChangeSubject = new Subject<boolean>();

  aquaticFoodLoad$ = this.aquaticFoodSubject.asObservable();
  aquaticChange$ = this.aquaticChangeSubject.asObservable();



  private aquaticFoods: AquaticFood[] = [];

  url = "http://localhost:3000/api/aquatic";

  constructor() { }


  openDetail(id: string): AquaticFood | undefined {
    const detail = this.aquaticFoods.find((data) => data._id == id);
    return detail;
  }

  resetAquaticFood(): AquaticFood[] {
    return this.aquaticFoods = [];
  }

  // addFetchAquatic(aquaticFoods: AquaticFood[]): AquaticFood[] {
  //   return this.aquaticFoods = aquaticFoods;
  // }

  // addAquaticByNum(num: number): AquaticFood | undefined {
  //   const detail = this.aquaticFoods.find((value, index) => {
  //     return index + 1 === num;
  //   });
  //   return detail;
  // }

  // addAqutic(aquatic: AquaticFood): void {
  //   this.aquaticFoods.push(aquatic);
  // }

  // updateAquatic(name: string, update: AquaticFood) {
  //   let findUpdate = this.aquaticFoods.find(value => name === value.name);
  // }

  // deleteItem(name: string): void {
  //   let a = this.aquaticFoods.findIndex(value => name === value.name)
  //   console.log(this.aquaticFoods[a]);
  // }
}
