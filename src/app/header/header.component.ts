import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AquaticFood } from '../aquatic-food/aquaticFood.model';
import { AquaticFoodService } from '../service/aquatic-food.service';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url = "https://aquatic-food-default-rtdb.asia-southeast1.firebasedatabase.app/post.json";

  constructor(private http: HttpClient, private dataStorageService: DataStorageService, private aquaticFoodService: AquaticFoodService) { }

  ngOnInit(): void {
  }

  onCreatePost() {
    this.dataStorageService.createPost()
  }

  onFetchPosts() {
    this.dataStorageService.fetchPosts()
    this.http.delete(this.url).subscribe(() => {})
  }
}
