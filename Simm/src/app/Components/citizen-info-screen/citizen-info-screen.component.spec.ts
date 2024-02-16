import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenInfoScreenComponent } from './citizen-info-screen.component';

describe('CitizenInfoScreenComponent', () => {
  let component: CitizenInfoScreenComponent;
  let fixture: ComponentFixture<CitizenInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitizenInfoScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
