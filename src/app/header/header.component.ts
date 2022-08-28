import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AquaticFoodService } from '../service/aquatic-food.service';
import { AuthService } from '../service/auth.service';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSubscription = new Subscription();

  isAuthenticate = false;

  url = "https://aquatic-food-default-rtdb.asia-southeast1.firebasedatabase.app/post.json";

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService, private aquaticFoodService: AquaticFoodService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject
    .subscribe(
      user => {
        this.isAuthenticate = !!user;
      }
    )
  }

  onSaveAquatic() {
    this.dataStorageService.saveAquatic();
  }

  onFetchAquatic() {
    this.dataStorageService.fetchAquatic().subscribe(() => { });
  }

  onLogout() {
    this.authService.logout();
    this.aquaticFoodService.resetAquaticFood();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
