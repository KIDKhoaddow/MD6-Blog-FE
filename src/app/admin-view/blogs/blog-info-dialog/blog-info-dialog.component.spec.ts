import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInfoDialogComponent } from './blog-info-dialog.component';

describe('BlogInfoDialogComponent', () => {
  let component: BlogInfoDialogComponent;
  let fixture: ComponentFixture<BlogInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
