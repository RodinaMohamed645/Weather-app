import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtionalWeather } from './addtional-weather';

describe('AddtionalWeather', () => {
  let component: AddtionalWeather;
  let fixture: ComponentFixture<AddtionalWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtionalWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtionalWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
