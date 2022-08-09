import { newArray } from "@angular/compiler/src/util";
import { EventEmitter, Injectable } from "@angular/core"
import { AquaticFood } from "../aquatic-food/aquaticFood.model"
@Injectable()
export class AquaticFoodService {

  private aquaticFoods: AquaticFood[] = [
      // new AquaticFood("ปลาอินทรี", "กินได้ อร่อยดี", "https://www.bloggang.com/data/f/fasaiwonmai/picture/1452667716.jpg", 100, 0, []),
      // new AquaticFood("หมึก", "กินได้ อร่อยดี", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arrow_squid.jpg/300px-Arrow_squid.jpg", 100, 0, [])
  ];

  getAquaticFoods() {
    return this.aquaticFoods;
  }

  openDescription(name: string) {
    const detail = this.aquaticFoods.find(
      (d) => {
        return d.name == name
      }
    )
    return detail
  }

  clearArray() {
    this.aquaticFoods = []
  }

  addAqutic(name: string, desc: string, imagePath: string, qty: number, menu: Array<string>) {
    this.aquaticFoods.push(new AquaticFood(name, desc, imagePath, qty, 0, menu))
  }

  upDateAquatic(name: string, upDate: AquaticFood) {
    return this.aquaticFoods.map((value: AquaticFood, index: number) => {
      if (name === value.name) {
        this.aquaticFoods[index] = upDate;
      }
    });
  }

  deleteItem(name: string) {
    this.aquaticFoods.map((value: AquaticFood, index: number) => {
      if (name === value.name) {
        this.aquaticFoods.splice(index, 1)
        console.log('ค่า =', value, 'ตำแหน่ง =', index)
      }
    })
  }


}
