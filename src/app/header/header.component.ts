import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() aquaticFood = new EventEmitter<string>();
  @Output() distribution = new EventEmitter<string>();

  onAquaticFood(){
    this.aquaticFood.emit("on")
    this.distribution.emit("off")
  }

  onDritisbution(){
    this.aquaticFood.emit("off")
    this.distribution.emit("on")
  }


  constructor() { }

  ngOnInit(): void {
  }

}
