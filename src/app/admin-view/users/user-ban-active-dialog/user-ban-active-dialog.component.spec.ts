import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBanActiveDialogComponent } from './user-ban-active-dialog.component';

describe('UserBanActiveDialogComponent', () => {
  let component: UserBanActiveDialogComponent;
  let fixture: ComponentFixture<UserBanActiveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBanActiveDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBanActiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
