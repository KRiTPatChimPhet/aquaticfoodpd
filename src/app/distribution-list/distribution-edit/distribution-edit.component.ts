import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
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

  placeholderDritibution!: { name: string; quantity: string };

  constructor(private distibutionService: DistributionService) { }

  ngOnInit(): void {
    this.D = { name: '', quantity: NaN };
    this.distibutionService.DriSelected.subscribe((data) => {
      this.D = data;
    });
    this.placeholderDritibution = {
      name: 'Aquatic Name',
      quantity: 'Aquatic Qty'
    }
  }

  onAddFish() {
    this.distibutionService.addNewOrder(
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
    )
  }

  onSupmit(f: NgForm) {
    console.log(this.signupForm);
  }
}





