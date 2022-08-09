import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { AquaticFood } from '../aquatic-food/aquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  loadedPost: AquaticFood[] = []

  url = "https://aquatic-food-default-rtdb.asia-southeast1.firebasedatabase.app/post.json";

  constructor(private http: HttpClient, private aquaticFoodService: AquaticFoodService) { }

  createPost() {
    this.http.put(this.url, this.aquaticFoodService.getAquaticFoods())
      .subscribe((responseData) => {
        console.log('responseData :', responseData)
      })
  }

  fetchPosts() {
    this.aquaticFoodService.clearArray();
    this.http.get<{ [key: string]: AquaticFood }>(this.url)
      .pipe(
        map((responseData) => {
          const postArray: AquaticFood[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key] });
              this.aquaticFoodService.addAqutic(
                responseData[key].name,
                responseData[key].description,
                responseData[key].imagePath,
                responseData[key].quantity,
                responseData[key].menu
              )
            }
          }
          return postArray
        })
      )
      .subscribe(() => { })
  }
}
