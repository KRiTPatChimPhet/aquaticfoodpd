import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AquaticFood } from '../aquaticFood.model';


@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  aquaticFoods: AquaticFood[] = [
    new AquaticFood(
      'ปลาอินทรี',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cybium_interruptum_Ford_56.jpg/480px-Cybium_interruptum_Ford_56.jpg'
    ),
    new AquaticFood(
      'ปลาหมึก',
      'This is a test',
      'https://www.simummuangmarket.com/uploads/image-1578629204032.png'
    )
  ];

  @Output() details = new EventEmitter<string>();

  datas = ""

  openDetails(data:any){
    this.datas=data
    this.details.emit(this.datas)
    console.log(this.details)
  }




  constructor() { }

  ngOnInit(): void {
  }

}

