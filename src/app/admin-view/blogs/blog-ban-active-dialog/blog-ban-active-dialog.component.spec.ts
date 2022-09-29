import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBanActiveDialogComponent } from './blog-ban-active-dialog.component';

describe('BlogBanActiveDialogComponent', () => {
  let component: BlogBanActiveDialogComponent;
  let fixture: ComponentFixture<BlogBanActiveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBanActiveDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBanActiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
