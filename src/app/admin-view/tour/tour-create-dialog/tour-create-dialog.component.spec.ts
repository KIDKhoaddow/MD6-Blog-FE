import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCreateDialogComponent } from './tour-create-dialog.component';

describe('TourCreateDialogComponent', () => {
  let component: TourCreateDialogComponent;
  let fixture: ComponentFixture<TourCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
