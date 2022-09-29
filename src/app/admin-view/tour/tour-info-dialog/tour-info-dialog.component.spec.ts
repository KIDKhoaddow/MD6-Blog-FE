import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourInfoDialogComponent } from './tour-info-dialog.component';

describe('TourInfoDialogComponent', () => {
  let component: TourInfoDialogComponent;
  let fixture: ComponentFixture<TourInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
