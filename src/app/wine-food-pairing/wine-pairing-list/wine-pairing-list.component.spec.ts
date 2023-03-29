import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinePairingListComponent } from './wine-pairing-list.component';

describe('WinePairingListComponent', () => {
  let component: WinePairingListComponent;
  let fixture: ComponentFixture<WinePairingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinePairingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinePairingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
