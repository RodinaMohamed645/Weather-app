import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForcast } from './hourly-forcast';

describe('HourlyForcast', () => {
  let component: HourlyForcast;
  let fixture: ComponentFixture<HourlyForcast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyForcast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyForcast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
