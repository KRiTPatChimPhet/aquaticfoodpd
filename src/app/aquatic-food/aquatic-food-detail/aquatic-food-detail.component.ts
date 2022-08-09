import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { AquaticFood } from '../aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {

  data!: AquaticFood;

  constructor(private route: ActivatedRoute,private aquaticFoodService:AquaticFoodService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.data = this.aquaticFoodService.openDescription(params['name'])!;
      }
    );
  }

  deleteAqutic() {
    this.aquaticFoodService.deleteItem(this.data.name)
  }

}
