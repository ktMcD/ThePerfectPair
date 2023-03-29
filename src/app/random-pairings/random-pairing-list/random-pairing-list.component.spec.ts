import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomPairingListComponent } from './random-pairing-list.component';

describe('RandomPairingListComponent', () => {
  let component: RandomPairingListComponent;
  let fixture: ComponentFixture<RandomPairingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPairingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPairingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
