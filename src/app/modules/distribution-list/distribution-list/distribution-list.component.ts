import { Component, Input, OnInit } from '@angular/core';
import { AquaticFoodService } from 'src/app/core/service/aquatic-food.service';
import { DistributionService } from 'src/app/core/service/distribution.service';
import { Distribution } from 'src/app/core/type/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {

  distributions!: Distribution[];

  constructor(private _distibutionService: DistributionService,
              private _aquaticFoodService: AquaticFoodService) { }

  ngOnInit(): void {
    this.distributions = this._distibutionService.getDistridutions();
  }

  addList(item: any): void {
    this._distibutionService.driSelected.emit(item);
  }


}

