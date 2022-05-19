import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticFoodDetailComponent } from './aquatic-food-detail.component';

describe('AquaticFoodDetailComponent', () => {
  let component: AquaticFoodDetailComponent;
  let fixture: ComponentFixture<AquaticFoodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticFoodDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticFoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
