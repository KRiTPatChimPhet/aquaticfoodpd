import { Component, Input, OnInit} from '@angular/core';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { AquaticFood } from '../../aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css'],
})
export class AquaticFoodItemComponent implements OnInit {

  constructor(private aquaticFoodService:AquaticFoodService ) {}

  ngOnInit(): void {}

  @Input() item!: AquaticFood;

  onDetail() {
    this.aquaticFoodService.aquaticSelected.emit(this.item);
  }




}
