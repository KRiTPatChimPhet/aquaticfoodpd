import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticFoodListComponent } from './aquatic-food-list.component';

describe('AquaticFoodListComponent', () => {
  let component: AquaticFoodListComponent;
  let fixture: ComponentFixture<AquaticFoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticFoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
