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
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { AquaticFoodService } from './service/aquatic-food.service';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';



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
    AquaticEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AquaticFoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
