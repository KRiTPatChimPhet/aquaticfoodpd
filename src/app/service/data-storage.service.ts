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

  constructor(private http: HttpClient, private aquaticFoodService: AquaticFoodService, private authService: AuthService) { }

  saveAquatic() {
    this.http.put(this.url, this.aquaticFoodService.getAquaticFoods())
      .subscribe((responseData) => {
        console.log('responseData :', responseData)
      })
  }

  fetchAquatic() {
    return this.http.get<AquaticFood[]>(this.url)
      .pipe(
        take(1),
        map((aqutic) => {
          const postArray: AquaticFood[] = this.aquaticFoodService.getAquaticFoods();
          if (aqutic) {
            postArray.push(...aqutic);
          }
        })
      )
  }

}

