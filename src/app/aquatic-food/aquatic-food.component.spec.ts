import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticFoodComponent } from './aquatic-food.component';

describe('AquaticFoodComponent', () => {
  let component: AquaticFoodComponent;
  let fixture: ComponentFixture<AquaticFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
