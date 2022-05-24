import { Component, OnInit } from '@angular/core';
import { Distribution } from '../shared/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css']
})
export class DistributionListComponent implements OnInit {
  distributions: Distribution[] = [
    new Distribution("ปลาอินทรี",10),
    new Distribution("ปลาหมึก",12)
  ];
  onAdded(data: any) {
    this.distributions.push(data);
    console.log(data)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
