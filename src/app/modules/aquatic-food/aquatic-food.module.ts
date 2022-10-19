import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';

import { AquaticStartComponent } from './components/aquatic-start/aquatic-start.component';
import { AquaticFoodDetailComponent } from './components/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodItemComponent } from './components/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodRoutingModule } from './aquatic-food-routing.module';
import { AquaticEditComponent } from './components/aquatic-edit/aquatic-edit.component';
import { AquaticFoodListComponent } from './components/aquatic-food-list/aquatic-food-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AquaticFoodComponent,
    AquaticFoodListComponent,
    AquaticStartComponent,
    AquaticFoodDetailComponent,
    AquaticFoodItemComponent,
    AquaticEditComponent,
  ],
  imports: [
    CommonModule,
    AquaticFoodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AquaticFoodModule { }
