import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { concatMap, tap } from 'rxjs';
import { AquaticFoodService } from 'src/app/core/service/aquatic-food.service';
import { DataStorageService } from 'src/app/core/service/data-storage.service';
import { DistributionService } from 'src/app/core/service/distribution.service';
import { AquaticFood } from 'src/app/core/type/aquatic-food.model';
import { Distribution } from 'src/app/core/type/distribution.model';
import { __param } from 'tslib';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {

  aquaticFood?: AquaticFood;

  aquaticFoods?: AquaticFood[];

  constructor(private _route: ActivatedRoute,
    private _dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this._route.params
      .pipe(
        tap((params: Params) => console.log(params)),
        concatMap((params: Params) => {
          return this._dataStorageService.fetchAquaticById(params['id']);
        })
      )
      .subscribe((aquaticFood) => {
        console.log(aquaticFood);
        this.aquaticFood = aquaticFood;
      });
  }

  deleteAquatic(): void {
    this._route.params
      .pipe(
        concatMap((params: Params) => {
          return this._dataStorageService.delete(params['id']);
        })
      )
      .subscribe((aquaticFood) => {
        console.log(aquaticFood);
      });
  }
}

