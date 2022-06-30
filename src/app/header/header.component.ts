import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<string>();

  // onAquaticFood(){
  //   this.open.emit("aquatic");
  // }

  // onDritisbution(){
  //   this.open.emit("dritisbution");
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
