import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './aquatic-food/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/aquatic-food', pathMatch: 'full'},
  { path: 'aquatic-food', component: AquaticFoodComponent,
    canActivate: [AuthGuard],
  children:[
    {path: 'new',component: AquaticEditComponent},
    {path: ':name',
      component: AquaticFoodDetailComponent},
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
