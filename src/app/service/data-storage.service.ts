import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AquaticFood } from '../aquatic-food/aquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  url = "https://aquatic-food-default-rtdb.asia-southeast1.firebasedatabase.app/post.json";

  constructor(private http: HttpClient, private aquaticFoodService: AquaticFoodService) { }

  createPost() {
    this.aquaticFoodService.getAquaticFoods().map((value:AquaticFood) => {
      this.http.post(this.url, value)
      .subscribe((responseData) => {
        console.log('responseData :', responseData)
      })
    })
  }
}
