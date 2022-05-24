import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {

  @Output() menuCreated = new EventEmitter<{
    name: string;
    quantity: string;
  }>();

  @ViewChild('aquticName') aquticName!: ElementRef;

  @ViewChild('qty') qty!: ElementRef;

  onAddFish() {
    this.menuCreated.emit({
      name: this.aquticName.nativeElement.value,
      quantity: this.qty.nativeElement.value
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
