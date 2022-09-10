import { Component, OnInit } from '@angular/core';
import { AquaticFoodService } from '../service/aquatic-food.service';

@Component({
  selector: 'app-aquatic-food',
  templateUrl: './aquatic-food.component.html',
  styleUrls: ['./aquatic-food.component.css']
})
export class AquaticFoodComponent implements OnInit {


  constructor(private aquaticFoodService: AquaticFoodService) {}

  ngOnInit(): void {
    this.aquaticFoodService.showManageSubject.next(true);
  }

}
