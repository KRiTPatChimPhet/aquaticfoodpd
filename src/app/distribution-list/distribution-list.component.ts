import { Component, Input, OnInit } from '@angular/core';
import { DistributionService } from '../service/distribution.service';
import { Distribution } from '../shared/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {

  distributions! : Distribution[];

  constructor(private distibutionService: DistributionService) {}

  ngOnInit(): void {
    this.distributions = this.distibutionService.getDistridutions()
  }

  addList(item:any) {
    this.distibutionService.DriSelected.emit(item)
  }


}

