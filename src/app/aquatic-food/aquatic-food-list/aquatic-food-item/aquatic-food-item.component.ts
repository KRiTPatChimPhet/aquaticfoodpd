import { Component, OnInit} from '@angular/core';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { AquaticFood } from '../../aquaticFood.model';


@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css'],
})
export class AquaticFoodItemComponent implements OnInit {

  constructor(private aquaticFoodService:AquaticFoodService) {}

  aquaticFood!:AquaticFood[];

  ngOnInit(): void {
    this.aquaticFood = this.aquaticFoodService.getAquaticFoods();
    console.log('1 =',this.aquaticFood);
    this.aquaticFoodService.aquaticFoodSubject.subscribe(
      check => {
        this.aquaticFood = this.aquaticFoodService.getAquaticFoods();
        console.log('2 =',this.aquaticFood);
        console.log(check)
      }
    )

  }

}
