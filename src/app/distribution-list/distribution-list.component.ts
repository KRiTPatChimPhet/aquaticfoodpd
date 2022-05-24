import { Component, OnInit } from '@angular/core';
import { Distribution } from '../shared/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {
  distributions: Distribution[] = [
    new Distribution('ปลาอินทรี', 10),
    new Distribution('ปลาหมึก', 12),
  ];

  check: boolean = false;

  onAdded(data: any) {
    this.check = false;
    for (let i = 0; i < this.distributions.length; i++) {
      if (this.distributions[i].name === data.name.trim()) {
        this.distributions[i].quantity += parseInt(data.quantity);
        this.check = true;
        }
      }
    if (this.check === false) {
      this.distributions.push({
        name: data.name.trim(),
        quantity: parseInt(data.quantity),
      });
    }
  }


  constructor() {}

  ngOnInit(): void {}
}
