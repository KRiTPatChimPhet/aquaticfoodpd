import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { AquaticResolverService } from './aqutic-resolver.service';
import { AquaticEditComponent } from './components/aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './components/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticStartComponent } from './components/aquatic-start/aquatic-start.component';


const routes: Routes = [
  {
    path: '',
    resolve: {
      aqutic: AquaticResolverService
    },
    component: AquaticFoodComponent,
    canActivate: [AuthGuard],
    children:[
      {path: '', component: AquaticStartComponent},
      {
        path: ':id',
        component: AquaticFoodDetailComponent
      },
      //{path: 'new', component: AquaticEditComponent},
      {path: ':id/edit', component: AquaticEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AquaticFoodRoutingModule { }
