import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourUpdateDialogComponent } from './tour-update-dialog.component';

describe('TourUpdateDialogComponent', () => {
  let component: TourUpdateDialogComponent;
  let fixture: ComponentFixture<TourUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
