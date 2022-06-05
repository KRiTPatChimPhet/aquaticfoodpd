import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { AquaticFoodListComponent } from './aquatic-food/aquatic-food-list/aquatic-food-list.component';
import { AquaticFoodDetailComponent } from './aquatic-food/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodItemComponent } from './aquatic-food/aquatic-food-list/aquatic-food-item/aquatic-food-item.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { DistributionEditComponent } from './distribution-list/distribution-edit/distribution-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './aquatic-food/aquatic-food-detail/dropdown/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    AquaticFoodComponent,
    AquaticFoodListComponent,
    AquaticFoodDetailComponent,
    AquaticFoodItemComponent,
    DistributionListComponent,
    DistributionEditComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
