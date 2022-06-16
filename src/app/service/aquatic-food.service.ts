import { EventEmitter, Injectable } from "@angular/core"
import { AquaticFood } from "../aquatic-food/aquaticFood.model"
@Injectable()
export class AquaticFoodService{

  aquaticSelected = new EventEmitter<AquaticFood>();

  private aquaticFoods: AquaticFood[] = [
    new AquaticFood ("ปลาอินทรี", "กินได้ อร่อยดี", "https://www.bloggang.com/data/f/fasaiwonmai/picture/1452667716.jpg",100,0),
    new AquaticFood ("หมึก", "กินได้ อร่อยดี", "https://www.foodproject.co.th/images/product/Whole_Squid.jpg",100,0)
  ];

  getAquaticFoods(){
    return this.aquaticFoods.slice();
  }


}
