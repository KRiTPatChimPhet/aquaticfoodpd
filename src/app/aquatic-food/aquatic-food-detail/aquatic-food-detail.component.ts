import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { DistributionService } from 'src/app/service/distribution.service';
import { Distribution } from 'src/app/shared/distribution.model';
import { AquaticFood } from '../aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {


  aquaticFood!: AquaticFood;

  distribution!: Distribution;

  disQty:number = 0;

  constructor(private route: ActivatedRoute, private aquaticFoodService: AquaticFoodService,
    private dataStorageService: DataStorageService, private distributionService: DistributionService) { }

  ngOnInit(): void {
    if (this.aquaticFood) {
      this.route.params.subscribe(
        (params: Params) => {
          this.aquaticFood = this.aquaticFoodService.addAquaticByNum(+params['id'])!;
        }
      );
    } else this.dataStorageService.fetchAquatic().subscribe(() => {
      this.route.params.subscribe((params: Params) => {
        if (+params['name']) {
          this.aquaticFood = this.aquaticFoodService.addAquaticByNum(+params['name'])!;
          this.distribution = this.distributionService.addValueOnInput(this.aquaticFood.name)!;
        } else {
          this.aquaticFood = this.aquaticFoodService.openDescription(params['name'])!;
          this.distribution = this.distributionService.addValueOnInput(this.aquaticFood.name)!;
        }
         this.disQty = this.distribution ? this.distribution.quantity : 0;
      });
    });
  }

  deleteAqutic() {
    this.aquaticFoodService.deleteItem(this.aquaticFood.name)
  }

}
