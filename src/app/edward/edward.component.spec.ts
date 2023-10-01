import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdwardComponent } from './edward.component';

describe('EdwardComponent', () => {
  let component: EdwardComponent;
  let fixture: ComponentFixture<EdwardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdwardComponent]
    });
    fixture = TestBed.createComponent(EdwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
