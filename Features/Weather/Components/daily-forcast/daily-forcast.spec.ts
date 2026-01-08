import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForcast } from './daily-forcast';

describe('DailyForcast', () => {
  let component: DailyForcast;
  let fixture: ComponentFixture<DailyForcast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyForcast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyForcast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
