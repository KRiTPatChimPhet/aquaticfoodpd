import { Component, Input, OnInit } from '@angular/core';
import { CalculateQuatityService } from 'src/app/service/calculate-quatity.service';
import { AquaticFood } from '../aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {

  @Input() data!: AquaticFood;

  constructor(private calculate: CalculateQuatityService) { }

  ngOnInit(): void {
    this.calculate.calculate();
  }

}
