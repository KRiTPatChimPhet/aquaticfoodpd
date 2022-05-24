import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquatic-food',
  templateUrl: './aquatic-food.component.html',
  styleUrls: ['./aquatic-food.component.css']
})
export class AquaticFoodComponent implements OnInit {

  check:boolean = false;

  dataDetail! :{
    name: string,
    description: string,
    imagePath: string
  };

  openDetail(details: any){
    this.dataDetail = details
    this.check = true
    console.log(this.dataDetail)
  };

  constructor() { }

  ngOnInit(): void {
  }

}
