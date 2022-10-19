import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { AquaticFoodService } from 'src/app/core/service/aquatic-food.service';
import { AquaticFood } from 'src/app/core/type/aquatic-food.model';


@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css'],
})
export class AquaticFoodItemComponent implements OnInit, OnDestroy {

  private _unsubscribeAll = new Subject<any>();

  isLoad: boolean = true;

  @Input() aquaticFood?: AquaticFood[] = [];

  constructor(private _aquaticFoodService: AquaticFoodService) { }

  ngOnInit(): void {
    this._aquaticFoodService.aquaticFoodLoad$
      .pipe(takeUntil(this._unsubscribeAll),)
      .subscribe((check) => {
        this.isLoad = check;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }
}
