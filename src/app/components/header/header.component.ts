import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AquaticFoodService } from 'src/app/core/service/aquatic-food.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { DataStorageService } from 'src/app/core/service/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _unsubscribeAll = new Subject<any>();

  userSubscription = new Subscription();

  isAuthenticate = false;

  isManage = true;

  url = "https://aquatic-food-default-rtdb.asia-southeast1.firebasedatabase.app/post.json";

  constructor(
    private _authService: AuthService,
    private _aquaticFoodService: AquaticFoodService
  ) {

  }

  ngOnInit(): void {
    this._aquaticFoodService.aquaticFoodLoad$
      .subscribe((check) => {
        this.isManage = check;
      });

    this.userSubscription = this._authService.userSubject
      .subscribe(
        user => {
          this.isAuthenticate = !!user;
        }
      )
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }

  // onSaveAquatic(): void {
  // //   this._dataStorageService.saveAquatic();
  // }

  // onFetchAquatic(): void {
  //   this._dataStorageService.fetchAquatic().subscribe();
  // }

  onLogout(): void {
    this._authService.logout();
    this._aquaticFoodService.resetAquaticFood();
  }
}
