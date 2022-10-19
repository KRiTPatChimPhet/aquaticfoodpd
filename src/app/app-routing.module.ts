import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/aquatic-food', pathMatch: 'full'
  },
  {
    path: 'aquatic-food',
    loadChildren: () => import('./modules/aquatic-food/aquatic-food.module')
      .then(m => m.AquaticFoodModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'distribution-list',
    loadChildren: () => import('./modules/distribution-list/distribution-list.module')
      .then(m => m.DistributionListModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
