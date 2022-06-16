import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { DistributionService } from 'src/app/service/distribution.service';
import { Distribution } from 'src/app/shared/distribution.model';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {

  @Input() data!: Distribution;

  D!: Distribution;

  placeholderDritibution!: { name: string; quantity: string };

  constructor(private distibutionService: DistributionService) {}

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

  @ViewChild('aquticName') aquticName!: ElementRef;

  @ViewChild('qty') qty!: ElementRef;

  onAddFish() {
    if (
      this.aquticName.nativeElement.value === '' ||
      this.qty.nativeElement.value === ''
    ) {
      this.placeholderDritibution = {
        name: 'กรุณากรอกข้อมูล',
        quantity: 'กรุณากรอกข้อมูล',
      };
    } else {
      this.distibutionService.addNewOrder(
        (this.D = {
          name: this.aquticName.nativeElement.value,
          quantity: parseInt(this.qty.nativeElement.value)
        })
      );
    }
  }

  updateData(){
    if (
      this.aquticName.nativeElement.value === '' ||
      this.qty.nativeElement.value === ''
    ) {
      this.placeholderDritibution = {
        name: 'กรุณากรอกข้อมูล',
        quantity: 'กรุณากรอกข้อมูล',
      };
    } else {
    this.distibutionService.updateQty(
      (this.D = {
        name: this.aquticName.nativeElement.value,
        quantity: parseInt(this.qty.nativeElement.value)
      })
    )
    }
  }
}
