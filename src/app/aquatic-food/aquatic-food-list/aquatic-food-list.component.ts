import { Component, OnInit} from '@angular/core';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { AquaticFood } from '../aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  ngOnInit(): void {}

}

