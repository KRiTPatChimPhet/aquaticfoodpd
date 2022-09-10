import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AquaticFoodService } from '../service/aquatic-food.service';
import { DistributionService } from '../service/distribution.service';
import { Distribution } from '../shared/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {

  distributions! : Distribution[];

  constructor(private distibutionService: DistributionService, private aquaticFoodService: AquaticFoodService ) {}

  ngOnInit(): void {
    this.aquaticFoodService.showManageSubject.next(false);
    this.distributions = this.distibutionService.getDistridutions()
  }

  addList(item:any) {
    this.distibutionService.DriSelected.emit(item)
  }


}

