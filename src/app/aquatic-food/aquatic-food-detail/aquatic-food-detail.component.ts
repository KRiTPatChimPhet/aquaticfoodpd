import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { CalculateQuatityService } from 'src/app/service/calculate-quatity.service';
import { AquaticFood } from '../aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {

  data!: AquaticFood;

  constructor(private calculate: CalculateQuatityService,private route: ActivatedRoute,private aquaticFoodService:AquaticFoodService) { }

  ngOnInit(): void {
    this.calculate.calculate()
    this.route.params.subscribe(
      (params: Params) => {
        this.data = this.aquaticFoodService.openDescription(params['name'])!;
      }
    );
  }

}
