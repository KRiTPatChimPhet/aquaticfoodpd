import {
  Component,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DistributionService } from 'src/app/core/service/distribution.service';
import { AquaticFood } from 'src/app/core/type/aquatic-food.model';
import { Distribution } from 'src/app/core/type/distribution.model';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {

  @ViewChild('f') signupForm!: NgForm;

  @Input() data!: Distribution;

  distribution!: Distribution;

  item!: AquaticFood;

  checkUpdate: boolean = false;

  constructor(private _distibutionService: DistributionService) { }

  ngOnInit(): void {
    this.distribution = { name: '', quantity: NaN };
    this._distibutionService.driSelected.subscribe(
      (data) => {
        this.distribution = data;
        this.checkUpdate = true;
      }
    );
  }

  check: boolean = false;

  onAddFish(): void {
    this.check = this._distibutionService.addNewOrder(
      (this.distribution = {
        name: this.signupForm.value.aquaticNameInput,
        quantity: parseInt(this.signupForm.value.qunatityInput),
      })
    );
  }

  updateData(): void {
    this._distibutionService.updateQty(
      (this.distribution = {
        name: this.signupForm.value.aquaticNameInput,
        quantity: parseInt(this.signupForm.value.qunatityInput),
      })
    );
  }

  onSupmit(f: NgForm): void {
    // console.log(this.signupForm);
  }

  onClear(): void {
    this.checkUpdate = false;
    this.distribution = { name: '', quantity: 0 };
  }

  onDelete(): void {
    this._distibutionService.deleteData(this.signupForm.value.aquaticNameInput);
    this.checkUpdate = false;
    this.signupForm.reset();
  }
}





