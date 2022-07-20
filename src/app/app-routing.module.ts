import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './aquatic-food/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodItemComponent } from './aquatic-food/aquatic-food-list/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';

const appRoutes: Routes = [
  { path: '', component: AquaticFoodComponent},
  { path: 'aquatic-food', component: AquaticFoodComponent, children:[
    {path: 'new',component: AquaticEditComponent},
    {path: 'detail/:name',component: AquaticFoodDetailComponent},
    {path: 'detail/:name/:index/:edit',component: AquaticEditComponent}
  ]},
  { path: 'distribution-list', component: DistributionListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
