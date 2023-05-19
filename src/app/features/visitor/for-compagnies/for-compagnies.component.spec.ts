import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCompagniesComponent } from './for-compagnies.component';

describe('ForCompagniesComponent', () => {
  let component: ForCompagniesComponent;
  let fixture: ComponentFixture<ForCompagniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForCompagniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForCompagniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
