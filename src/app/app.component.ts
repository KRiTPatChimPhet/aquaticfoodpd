import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aquaticfoodpdtest';
<<<<<<< HEAD
=======
  openApp = ''

  onFeatureLoad(data: string) {
    this.openApp = data
  }

  // onDritisbution(dritibutionData: string) {
  //   this.openApp = dritibutionData
  // }
>>>>>>> section2

  constructor() {

  }


}
