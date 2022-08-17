import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './aquatic-food/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodItemComponent } from './aquatic-food/aquatic-food-list/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AquaticResolveService } from './service/aquatic-resolve.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/aquatic-food', pathMatch: 'full'},
  { path: 'aquatic-food', component: AquaticFoodComponent,
    canActivate: [AuthGuard],
  children:[
    {path: 'new',component: AquaticEditComponent},
    {path: ':name',component: AquaticFoodDetailComponent,
     resolve: {aquaticData:AquaticResolveService}},
    {path: ':name/edit',component: AquaticEditComponent}
  ]},
  { path: 'auth', component: AuthComponent},
  { path: 'distribution-list', component: DistributionListComponent, children:[
    {path: ':name',component: DistributionListComponent}]},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
