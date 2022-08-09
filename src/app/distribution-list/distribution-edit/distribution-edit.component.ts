import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFood } from 'src/app/aquatic-food/aquaticFood.model';
import { AquaticFoodService } from 'src/app/service/aquatic-food.service';
import { CalculateQuatityService } from 'src/app/service/calculate-quatity.service';
import { DistributionService } from 'src/app/service/distribution.service';
import { Distribution } from 'src/app/shared/distribution.model';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {


  @ViewChild('f') signupForm!: NgForm;

  @Input() data!: Distribution;

  D!: Distribution;

  item!: AquaticFood;

  placeholderDritibution!: { name: string; quantity: string };

  checkUpdate: boolean = false;

  constructor(private distibutionService: DistributionService) { }

  ngOnInit(): void {
    this.D = { name: '', quantity: NaN };
    this.distibutionService.DriSelected.subscribe((data) => {
      this.D = data
      this.checkUpdate = true;
    });
    this.placeholderDritibution = {
      name: 'Aquatic Name',
      quantity: 'Aquatic Qty'
    }
  }

  check: boolean = false;

  onAddFish() {
    this.check = this.distibutionService.addNewOrder(
      (this.D = {
        name: this.signupForm.value.aquaticNameInput,
        quantity: parseInt(this.signupForm.value.qunatityInput)
      })
    );
  }

  updateData() {
    this.distibutionService.updateQty(
      (this.D = {
        name: this.signupForm.value.aquaticNameInput,
        quantity: parseInt(this.signupForm.value.qunatityInput)
      })
    );
  }

  onSupmit(f: NgForm) {
    // console.log(this.signupForm);
  }

  onClear() {
    this.checkUpdate = false;
  }

  onDelete() {
    this.distibutionService.deleteData(this.signupForm.value.aquaticNameInput);
    this.checkUpdate = false;
    this.signupForm.reset()
  }
}





