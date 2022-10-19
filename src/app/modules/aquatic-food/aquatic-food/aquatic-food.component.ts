import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, concatMap } from 'rxjs';
import { AquaticFoodService } from 'src/app/core/service/aquatic-food.service';
import { DataStorageService } from 'src/app/core/service/data-storage.service';
import { AquaticFood } from 'src/app/core/type/aquatic-food.model';

@Component({
  selector: 'app-aquatic-food',
  templateUrl: './aquatic-food.component.html',
  styleUrls: ['./aquatic-food.component.css']
})
export class AquaticFoodComponent implements OnInit, OnDestroy {

  aquaticFood?: AquaticFood[];

  private _unsubscribeAll = new Subject<any>();

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _dataStorageService: DataStorageService,
    private _aquaticService: AquaticFoodService
  ) { }

  ngOnInit(): void {
    this.aquaticFood = this._activatedRoute.snapshot.data['aqutic'];
    console.log(this.aquaticFood);

    this._aquaticService.aquaticChange$
      .pipe(
        takeUntil(this._unsubscribeAll),
        concatMap(() => this._dataStorageService.fetchAquatic())
      )
      .subscribe((aquatic) => {
        this.aquaticFood = aquatic;
      });

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }

}
