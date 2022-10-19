import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aquaticfoodpd';
  openApp = ''

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.autoLogin();
  }
}
