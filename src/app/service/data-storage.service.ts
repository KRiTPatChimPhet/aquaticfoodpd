import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs';
import { AquaticFood } from '../aquatic-food/aquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  loadedPost: AquaticFood[] = []

  url = "https://aquatic-food-default-rtdb.asia-southeast1.firebasedatabase.app/post.json";

  constructor(private http: HttpClient, private aquaticFoodService: AquaticFoodService) { }

  saveAquatic() {
    this.http.put(this.url, this.aquaticFoodService.getAquaticFoods())
      .subscribe((responseData) => {
        console.log('responseData :', responseData)
      })
  }

  fetchAquatic() {
    this.aquaticFoodService.resetAquaticFood();
    this.aquaticFoodService.aquaticFoodSubject.next(false);
    return this.http.get<AquaticFood[]>(this.url)
      .pipe(
        take(1),
        map((aquatic) => {
          if (aquatic) {
            this.aquaticFoodService.addFetchAquatic(aquatic);
            this.aquaticFoodService.aquaticFoodSubject.next(true);
          }
        })
      )
  }

}

