import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css'],
})
export class AquaticFoodItemComponent implements OnInit {
  @Input() items!: {
    name: string,
    description: string,
    imagePath: string
  };

  @Output() detail = new EventEmitter<{
    name: string,
    description: string,
    imagePath: string
  }>();

  onDetail() {
    this.detail.emit(this.items);
  }

  constructor() {}

  ngOnInit(): void {}
}
