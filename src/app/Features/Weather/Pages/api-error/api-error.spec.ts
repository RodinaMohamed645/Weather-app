import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiError } from './api-error';

describe('ApiError', () => {
  let component: ApiError;
  let fixture: ComponentFixture<ApiError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
