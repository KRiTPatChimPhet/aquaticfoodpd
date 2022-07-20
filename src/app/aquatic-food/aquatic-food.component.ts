import { Component, OnInit } from '@angular/core';
import { AquaticFoodService } from '../service/aquatic-food.service';
import { AquaticFood } from './aquaticFood.model';

@Component({
  selector: 'app-aquatic-food',
  templateUrl: './aquatic-food.component.html',
  styleUrls: ['./aquatic-food.component.css']
})
export class AquaticFoodComponent implements OnInit {

  ngOnInit(): void {
  }

}
