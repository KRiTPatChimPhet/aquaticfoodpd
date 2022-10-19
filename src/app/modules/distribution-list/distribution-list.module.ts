import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributionListRoutingModule } from './distribution-list-routing.module';
import { DistributionEditComponent } from './components/distribution-edit/distribution-edit.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DistributionEditComponent,
    DistributionListComponent
  ],
  imports: [
    CommonModule,
    DistributionListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DistributionListModule { }
