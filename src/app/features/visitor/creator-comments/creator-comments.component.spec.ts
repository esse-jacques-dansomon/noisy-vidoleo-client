import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorCommentsComponent } from './creator-comments.component';

describe('CreatorCommentsComponent', () => {
  let component: CreatorCommentsComponent;
  let fixture: ComponentFixture<CreatorCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
