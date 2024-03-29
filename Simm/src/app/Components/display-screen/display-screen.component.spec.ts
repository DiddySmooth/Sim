import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScreenComponent } from './display-screen.component';

describe('DisplayScreenComponent', () => {
  let component: DisplayScreenComponent;
  let fixture: ComponentFixture<DisplayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
