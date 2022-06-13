import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AquaticFood } from '../aquaticFood.model';


@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {

  @Output() details = new EventEmitter<string>();

  datas: string = "";

  openDetails(data:any){
    this.datas=data
    this.details.emit(this.datas)
    console.log(this.details)
  };




  constructor() { }

  ngOnInit(): void {
  }

}

