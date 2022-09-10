import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticStartComponent } from './aquatic-start.component';

describe('AquaticStartComponent', () => {
  let component: AquaticStartComponent;
  let fixture: ComponentFixture<AquaticStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
