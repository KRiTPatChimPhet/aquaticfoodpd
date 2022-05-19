import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticFoodItemComponent } from './aquatic-food-item.component';

describe('AquaticFoodItemComponent', () => {
  let component: AquaticFoodItemComponent;
  let fixture: ComponentFixture<AquaticFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticFoodItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
