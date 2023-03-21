import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairingListComponent } from './pairing-list.component';

describe('PairingListComponent', () => {
  let component: PairingListComponent;
  let fixture: ComponentFixture<PairingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
