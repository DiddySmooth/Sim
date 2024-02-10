import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeUpAreaComponent } from './age-up-area.component';

describe('AgeUpAreaComponent', () => {
  let component: AgeUpAreaComponent;
  let fixture: ComponentFixture<AgeUpAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeUpAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeUpAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
