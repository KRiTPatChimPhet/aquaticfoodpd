import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aquaticfoodpdtest';
  openAqutic = ''
  openDritisbution = ''

  onAquaticFood(aquticData: any) {
    this.openAqutic = aquticData
    console.log(this.openAqutic)
  }

  onDritisbution(dritibutionData: any) {
    this.openDritisbution = dritibutionData
    console.log(this.openDritisbution)
  }

  constructor() {

  }


}
