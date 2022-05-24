import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  onAddFish(aquticName:HTMLInputElement, qty: HTMLInputElement) {
    this.menuCreated.emit({
      name: aquticName.value,
      quantity: qty.value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
