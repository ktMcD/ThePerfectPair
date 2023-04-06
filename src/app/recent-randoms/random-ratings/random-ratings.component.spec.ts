import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRatingsComponent } from './random-ratings.component';

describe('RandomRatingsComponent', () => {
  let component: RandomRatingsComponent;
  let fixture: ComponentFixture<RandomRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
