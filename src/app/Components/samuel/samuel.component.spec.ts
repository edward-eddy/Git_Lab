import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuelComponent } from './samuel.component';

describe('SamuelComponent', () => {
  let component: SamuelComponent;
  let fixture: ComponentFixture<SamuelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamuelComponent]
    });
    fixture = TestBed.createComponent(SamuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
